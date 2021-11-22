import React from 'react'
import { toast } from 'react-toastify';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import agent from '../../app/api/agent';
import useQuery from '../../app/common/util/hooks'

export const RegisterSuccess = () => {
    const email = useQuery().get('email') as string;

    const handleConfirmEmailResend = () => {
        agent.Account.resendEmailConfirm(email).then(() => {
            toast.success("Verification email resent - please check your email")
        }).catch(error => console.log(error))
    };

    return (
        <Segment placeholder textAlign='center'>
            <Header icon color='green'>
                <Icon name='check' />
                Successfully registered!
            </Header>
            <p>Please check your email for the verification email</p>
            {email &&
                <>
                    <p>Didn't receive the email? Click below to resend</p>
                    <Button primary onClick={handleConfirmEmailResend} content='Resend Email' size='huge' />
                </>
            }
        </Segment>
    )
}
