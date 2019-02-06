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
            iscollapsed: !state.iscollapsed,
        }));
    }

    render = () => (
        <Navbar color='white' light className={styles.Navbar} expand='md'>
            <NavbarBrand href='/'>
                <img src='/static/images/logo1.png' className={styles.logo} />
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.iscollapsed} navbar>
                <Nav className="ml-auto mr-auto" navbar>
                    {
                        linksArray.map((e,i) => (
                            <NavItem className={styles.NavLink} key={i}>
                                <NavLink className="mx-3" href={e.href}> {e.text} </NavLink>
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