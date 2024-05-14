import React, {useState} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import logo from "../img/logo.svg";

function Navbar_(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-light bg-white">
                <NavbarBrand href="/">
                    <img src={logo} alt="logo"/>
                </NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar cssModule="collapse navbar-collapse justify-content-end"
                          id="navbarNavDropdown">
                    <Nav className="justify-content-end" style={{ width: "100%",paddingRight:"2%" }}>
                        <NavItem>
                            <NavLink href="/FerretHeavenn" className="nav_item">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about" className="nav_item ">O Nas</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ferrets" className="nav_item">Nasze Fretki</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/kontakt" className="nav_item">Kontakt</NavLink>
                        </NavItem>
                        <NavItem>
                            <button type="button" className="btn btn-outline-dark nav_item_btn"><NavLink href="/login" className="nav_item_login">Zaloguj Się</NavLink></button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navbar_;