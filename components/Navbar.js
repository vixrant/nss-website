import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    NavbarToggler,
    Collapse
} from 'reactstrap/';
import styles from './Navbar.css';

const linksArray = [
    {
        text: 'HOME',
        href: '/',
    },
    {
        text: 'EVENTS',
        href: '/events',
    },
    {
        text: 'TECHNICAL',
        href: '/tech',
    },
    {
        text: 'CAMP',
        href: '/camp',
    },
    {
        text: 'UPCOMING EVENTS',
        href: '/upcoming',
    },
    {
        text: 'ABOUT US',
        href: '/about',
    },
];

export default class CustomNavbar extends React.Component {
    state = {
        isCollapsed: false,
    }

    constructor(props) {
        super(props);
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
                                <NavLink 
                                    className={["mx-3", e.href == this.currentRoute ? 'active' : ''].join(' ')} 
                                    href={e.href}>
                                    {e.text}
                                </NavLink>
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