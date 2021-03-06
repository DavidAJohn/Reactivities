import { observer } from 'mobx-react-lite';
import { useState } from 'react'
import { useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInput } from '../../../app/common/form/TextInput';
import { TextArea } from '../../../app/common/form/TextArea';
import { SelectInput } from '../../../app/common/form/SelectInput';
import { categoryOptions } from '../../../app/common/options/categoryOptions';
import { DateInput } from '../../../app/common/form/DateInput';
import { ActivityFormValues } from '../../../app/models/activity';

const ActivityForm = observer(() => {
    const history = useHistory();
    const {activityStore} = useStore();
    const {createActivity, updateActivity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();
    
    const [activity, setActivity] = useState<ActivityFormValues>(new ActivityFormValues());

    const validationSchema = Yup.object({
        title: Yup.string().required('The activity title is required'),
        description: Yup.string().required('The activity description is required'),
        category: Yup.string().required(),
        date: Yup.string().required('The date is required').nullable(),
        venue: Yup.string().required(),
        city: Yup.string().required(),
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(new ActivityFormValues(activity)));
    }, [id, loadActivity]);

    const handleFormSubmit = (activity: ActivityFormValues) => {
        if (!activity.id) {
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

    if (loadingInitial) return <LoadingComponent content='Loading activity...' />

    return (
        <Segment clearing>
            <Header content='Activity Details' sub color='teal' />
            <Formik 
                validationSchema={validationSchema} 
                enableReinitialize 
                initialValues={activity} 
                onSubmit={values => handleFormSubmit(values)}
                >
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete='off'>
                        <TextInput placeholder='Title' name='title' />
                        <TextArea rows={5} placeholder='Description' name='description' />
                        <SelectInput options={categoryOptions} placeholder='Category' name='category' />
                        <DateInput 
                            placeholderText='Date' 
                            name='date'
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMM d, yyyy h:mm aa'
                        />
                        <Header content='Location Details' sub color='teal' />
                        <TextInput placeholder='City' name='city' />
                        <TextInput placeholder='Venue' name='venue' />
                        <Button 
                            loading={isSubmitting} 
                            floated='right' 
                            positive 
                            type='submit' 
                            content='Submit'
                            disabled={isSubmitting || !dirty || !isValid}
                        />
                        <Button as={Link} to='/activities' floated='right' type='button' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment>
    )

})

export default ActivityForm;
