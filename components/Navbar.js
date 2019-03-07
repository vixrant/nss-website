import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap/';
import styles from './Navbar.css';

const linksArray = [
/*    {
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
    },*/
    {
        text: 'Camp',
        href: '/camp',
    },
    {
        text: 'Committee',
        href: '/committee',
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

    constructor(props) {
        super(props);
    }

    toggle = () => {
        this.setState(state => ({
            iscollapsed: !state.iscollapsed,
        }));
    }

    render = () => (
        <Navbar sticky={'top'} color='white' light className={styles.Navbar} expand='md'>
            <NavbarBrand href='/'>
                <img src='/static/images/logo1.png' className={styles.logo} />
            </NavbarBrand>

            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.iscollapsed} navbar>
                <Nav className="ml-auto mr-auto" navbar>
                    <NavItem className={styles.NavLink}>
                        <NavLink className="mx-3" href="/">Home</NavLink>
                    </NavItem>                
                    <UncontrolledDropdown className={styles.NavLink} nav inNavbar>
                        <DropdownToggle className="mx-3" nav caret>
                            Events
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem className={styles.NavLink}>
                                <NavLink href="/outdoor">
                                    Outdoor
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem className={styles.NavLink}>
                                <NavLink href="/college">
                                    College
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem className={styles.NavLink}>
                                <NavLink href="/university">
                                    University
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>   
                    <UncontrolledDropdown className={styles.NavLink} nav inNavbar>
                        <DropdownToggle className="mx-3" nav caret>
                            Projects
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem className={styles.NavLink}>
                                <NavLink href="/technical">
                                    Technical
                                </NavLink>
                            </DropdownItem>
                            <DropdownItem className={styles.NavLink}>
                                <NavLink href="/unique">
                                    Unique
                                </NavLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>                                 
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