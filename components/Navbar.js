import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap/';
import styles from './Navbar.css';

const linksArray = [
    {
        text: 'Home',
        href: '/',
    },
    {
        text: 'Events',
        href: '/events',
    },
    {
        text: 'Technical',
        href: '/tech',
    },
    {
        text: 'Camp',
        href: '/camp',
    },
    {
        text: 'Upcoming Events',
        href: '/upcoming',
    },
    {
        text: 'About Us',
        href: '/about',
    },
];

export default class CustomNavbar extends React.Component {

    state = {
        isCollapsed: false,
    }

    toggle = () => {
        this.setState(state => ({
            isCollapsed: !state.isCollapsed,
        }));
    }

    render = () => (
        <Navbar color='white' className={styles.Navbar} expand='md'>
            <NavbarBrand href='/'>
                <img src='/static/images/logo1.png' className={styles.logo} />
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} />
            <Collapse navbar open={this.state.isCollapsed}>
                <Nav className={styles.links} navbar>
                    {
                        linksArray.map(e => (
                            <NavItem>
                                <NavLink href={e.href}> {e.text} </NavLink>
                            </NavItem>
                        ))
                    }
                </Nav>
            </Collapse>

            <NavbarBrand href='/'>
                <img src='/static/images/logo4.png' className={styles.logo} />
            </NavbarBrand>
        </Navbar>
    );
};
