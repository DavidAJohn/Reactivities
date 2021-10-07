import { Form, Formik } from 'formik'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button } from 'semantic-ui-react'
import { TextInput } from '../../app/common/form/TextInput'
import { useStore } from '../../app/stores/store'

export default observer(function LoginForm()  {
    const {userStore} = useStore();

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => userStore.login(values)}
        >
            {({handleSubmit, isSubmitting}) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <TextInput name='email' placeholder='Email' />
                    <TextInput name='password' placeholder='Password' type='password' />
                    <Button loading={isSubmitting} positive content='Login' type='submit' fluid />
                </Form>
            )}
        </Formik>
    )
})