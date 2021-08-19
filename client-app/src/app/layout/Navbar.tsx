import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

export const Navbar = () => {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}} />
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities'>
                    Activities
                </Menu.Item>
                <Menu.Item header>
                    <Button positive content='Create Activity' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}
