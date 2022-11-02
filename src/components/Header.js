import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome, faPen} from '@fortawesome/free-solid-svg-icons';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar dark color="primary" sticky="top" expand="md" fixed>
                <NavbarBrand href="/">one day</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/">
                                <FontAwesomeIcon icon={faHome}/> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/journal">
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