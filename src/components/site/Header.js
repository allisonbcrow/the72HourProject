import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand href="/"></NavbarBrand>
                <Nav className="ml-auto" navbar>
                   
                            <h1>Welcome!</h1>
                        
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;