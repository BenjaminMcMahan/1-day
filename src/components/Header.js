import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faPen} from '@fortawesome/free-solid-svg-icons';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar dark color="primary" sticky="top" expand="md">
                <NavbarBrand href="/" className="ms-4">one day</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/">
                                <FontAwesomeIcon icon={faHome}/> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/journal">
                                <FontAwesomeIcon icon={faPen}/> Journal
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;