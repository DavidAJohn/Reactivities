import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react'
import { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormInput, FormTextArea, Segment } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Formik } from 'formik';

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

    // const handleSubmit = () => {
    //     if (activity.id.length === 0) {
    //         let newActivity = {...activity, id: uuid()};

    //         createActivity(newActivity).then(() => {
    //             history.push(`/activities/${newActivity.id}`);
    //         })
    //     } else {
    //         updateActivity(activity).then(() => {
    //             history.push(`/activities/${activity.id}`);
    //         })
    //     }
    // }

    // const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const {name, value} = e.target;
    //     setActivity({...activity, [name]: value});
    // }

    if (loadingInitial) return <LoadingComponent content='Loading activity...' />

    return (
        <Segment clearing>
            <Formik enableReinitialize initialValues={activity} onSubmit={values => console.log(values)}>
                {({ values: activity, handleChange, handleSubmit }) => (
                    <Form onSubmit={handleSubmit} autoComplete='off'>
                        <FormInput placeholder='Title' value={activity.title} name='title' onChange={handleChange} />
                        <FormTextArea placeholder='Description' value={activity.description} name='description' onChange={handleChange} />
                        <FormInput placeholder='Category' value={activity.category} name='category' onChange={handleChange} />
                        <FormInput type='date' placeholder='Date' value={activity.date} name='date' onChange={handleChange} />
                        <FormInput placeholder='City' value={activity.city} name='city' onChange={handleChange} />
                        <FormInput placeholder='Venue' value={activity.venue} name='venue' onChange={handleChange} />
                        <Button loading={loading} floated='right' positive type='submit' content='Submit' />
                        <Button as={Link} to='/activities' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment>
    )
 
})

export default ActivityForm;
