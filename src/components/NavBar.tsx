'use client'
import { useState, useEffect } from 'react'
import NavItem from './NavItem';
import Link from 'next/link';

const navbarLinks: {english: string, shqip: string, url: string, newTab?: boolean | undefined}[] = [
    {english: "Home", shqip: "Shpi", url: "/"},
    {english: "Experience", shqip: "Eksperiencë", url: "/experience"},
    {english: "Projects", shqip: "Projektet", url: "/projects"},
    {english: "Test", shqip: "asdf", url: "https://apod.nasa.gov/apod/astropix.html", newTab: true},
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
                <Link href="/" className="logo">
                    Adem
                </Link>
            </div>
            <div className="navbar-links">
                <ul className="navbar-links">
                    { navbarLinks.map((item) => <NavItem item={item} key={id++}/>) }
                </ul>
            </div>
            <div className="language-toggle">
                {/* // Shqip and English */}
                TBD
            </div>
        </nav>
    )

}

export default NavBar
