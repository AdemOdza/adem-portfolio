import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import LanguageToggle from './LanguageToggle';
import { NavDropdown } from 'react-bootstrap';

export function Header({isEnglish, toggleLanguage}: {isEnglish: boolean, toggleLanguage: () => void}) {
    return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <LanguageToggle isEnglish = {isEnglish} onToggle = {toggleLanguage} />
                <Navbar.Brand href="/">Adem Odza</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/test">Test</Nav.Link>
                        {
                        <NavDropdown title="Experience" id="experience-nav-dropdown">
                            <NavDropdown.Item href="/experience/#repairify">
                                Repairify, Inc.
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/experience/#astech">
                                AsTech Automotive Technicians
                            </NavDropdown.Item>
                        </NavDropdown> 
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    )

}

export default Header;
