import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react'
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormInput, FormTextArea, Segment } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';

const ActivityForm = observer(() => {
    const history = useHistory();
    const {activityStore} = useStore();
    const {createActivity, updateActivity, loading, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();
    
    const [activity, setActivity] = useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!));
    }, [id, loadActivity]);

    const handleSubmit = () => {
        if (activity.id.length === 0) {
            let newActivity = {...activity, id: uuid()};

            createActivity(newActivity).then(() => {
                history.push(`/activities/${newActivity.id}`);
            })
        } else {
            updateActivity(activity).then(() => {
                history.push(`/activities/${activity.id}`);
            })
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setActivity({...activity, [name]: value});
    }

    if (loadingInitial) return <LoadingComponent content='Loading activity...' />

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <FormInput placeholder='Title' value={activity.title} name='title' onChange={handleInputChange} />
                <FormTextArea placeholder='Description' value={activity.description} name='description' onChange={handleInputChange} />
                <FormInput placeholder='Category' value={activity.category} name='category' onChange={handleInputChange} />
                <FormInput type='date' placeholder='Date' value={activity.date} name='date' onChange={handleInputChange} />
                <FormInput placeholder='City' value={activity.city} name='city' onChange={handleInputChange} />
                <FormInput placeholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange} />
                <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                <Button floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
 
})

export default ActivityForm;
