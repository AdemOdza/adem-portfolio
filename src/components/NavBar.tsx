'use client'
import { useState, useEffect } from 'react'
import NavItem from './NavItem';

const navbarLinks: {english: string, shqip: string, url: string}[] = [
    {english: "Home", shqip: "Shpi", url: "/"},
    {english: "Projects", shqip: "Projektet", url: "/projects"},
    {english: "Test B", shqip: "B", url: "/b"},
];

export const NavBar = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    let id: number = 0
    return (
        <nav className="navbar">
            <div>
                <a href="/" className="logo">
                    Adem
                </a>
            </div>
            <div className="navbar-links">
                <ul className="navbar-links">
                    { navbarLinks.map((item) => <NavItem item={item} key={id++}/>) }
                </ul>
            </div>
            <div className="navbar-socials">
                {/* // Linkedin, GitHub */}
                TBD
            </div>
        </nav>
    )

}

export default NavBar
