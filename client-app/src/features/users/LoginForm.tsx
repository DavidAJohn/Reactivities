import { Form, Formik } from 'formik'
import React from 'react'
import { Button } from 'semantic-ui-react'
import { TextInput } from '../../app/common/form/TextInput'

export const LoginForm = () => {
    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => console.log(values)}
        >
            {({handleSubmit}) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <TextInput name='email' placeholder='Email' />
                    <TextInput name='password' placeholder='Password' type='password' />
                    <Button positive content='Login' type='submit' fluid />
                </Form>
            )}
        </Formik>
    )
}
