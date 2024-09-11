import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LanguageToggle from './LanguageToggle';
import { NavDropdown } from 'react-bootstrap';

export function Header({isEnglish, toggleLanguage}: {isEnglish: boolean, toggleLanguage: () => void}) {
    return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <LanguageToggle isEnglish = {isEnglish} onToggle = {toggleLanguage} />
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/favicon-32x32.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Adem Odza
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://apod.nasa.gov/apod/astropix.html" target="_blank" rel="noreferrer" >Test</Nav.Link>
                        <Nav.Link href="/broken">Broken</Nav.Link>
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
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    )

}

export default Header;
