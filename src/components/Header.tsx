import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLanguage } from '../context/LanguageContext';
import { navTranslations } from '../translations';

const SOCIAL_LINKS = [
    {
        label: 'GitHub',
        href: 'https://github.com/AdemOdza',
        icon: <GitHubIcon fontSize="small" />,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/adem-odza',
        icon: <LinkedInIcon fontSize="small" />,
    },
];

export function Header() {
    const { language, toggleLanguage } = useLanguage();
    const t = navTranslations[language];

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>

                    {/* Brand */}
                    <Navbar.Brand as={Link} to="/">{t.brand}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" />

                    <Navbar.Collapse id="main-navbar">
                        {/* ── Left: page links ── */}
                        <Nav className="me-auto">
                            {/* <Nav.Link as={NavLink} to="/about">{t.about}</Nav.Link> */}
                            <Nav.Link as={NavLink} to="/projects">{t.projects}</Nav.Link>
                            <Nav.Link as={NavLink} to="/interests">{t.interests}</Nav.Link>
                            <Nav.Link href="/test">{t.test}</Nav.Link>
                        </Nav>

                        {/* ── Centre: language toggle ── */}
                        <button
                            className="lang-toggle mx-3"
                            onClick={toggleLanguage}
                            aria-label="Toggle language"
                            title={`Switch to ${language === 'en' ? 'alt' : 'EN'}`}
                        >
                            <span className={`lang-opt ${language === 'en' ? 'active' : ''}`}>EN</span>
                            <span className="lang-divider">│</span>
                            <span className={`lang-opt ${language === 'alt' ? 'active' : ''}`}>ALT</span>
                        </button>

                        {/* ── Right: social icons ── */}
                        <Nav className="align-items-center gap-1">
                            {SOCIAL_LINKS.map(({ label, href, icon }) => (
                                <Nav.Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    title={label}
                                    className="social-icon-link px-2"
                                >
                                    {icon}
                                </Nav.Link>
                            ))}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
