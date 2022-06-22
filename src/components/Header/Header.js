import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Input
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{backgroundColor:"#154c79"}} light expand="md">
                <NavbarBrand style={{color:"#eeeee4"}} href="/">Etkinliğini Bul</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink style={{color:"#eeeee4"}} href="/EventList">Etkinlikler</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color:"#eeeee4"}} href="/EventTypeList">Etkinlik Türleri</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color:"#eeeee4"}} href="/SalonList">Salonlar</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color:"#eeeee4"}} href="/OldEventList">Tarihi Geçmiş Etkinlikler</NavLink>
                        </NavItem>
                        <NavItem>
                            <Input type="text" placeholder='Aramak İstediğiniz'></Input>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;