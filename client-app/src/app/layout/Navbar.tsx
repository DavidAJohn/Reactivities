import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Button, Container, Dropdown, DropdownItem, DropdownMenu, Image, Menu, MenuItem } from 'semantic-ui-react'
import { useStore } from '../stores/store';

export const Navbar = observer(() => {
    const {userStore: {user, logout}} = useStore();

    return (
        <Menu inverted fixed='top'>
            <Container>
                <MenuItem as={NavLink} to='/' exact header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}} />
                    Reactivities
                </MenuItem>
                <MenuItem as={NavLink} to='/activities' name='Activities'>
                    Activities
                </MenuItem>
                <MenuItem as={NavLink} to='/errors' name='Errors'>
                    Errors
                </MenuItem>
                <MenuItem header>
                    <Button as={NavLink} to='/createActivity' positive content='Create Activity' />
                </MenuItem>
                <MenuItem position='right'>
                    <Image src={user?.image || 'assets/user.png'} avatar spaced='right' />
                    <Dropdown pointing='top left' text={user?.displayName}>
                        <DropdownMenu>
                            <DropdownItem as={Link} to={`/profile/${user?.username}`} text='My Profile' icon='user'></DropdownItem>
                            <DropdownItem onClick={logout} text='Log Out' icon='power'></DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </MenuItem>
            </Container>
        </Menu>
    )
});
