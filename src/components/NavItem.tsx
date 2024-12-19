// export const NavItem = ({item, isHovering, onHover, onLeave}: Readonly<{item: {english: string, shqip: string, url: string}, isHovering: boolean, onHover: () => void, onLeave: () => void}>) => {

import Link from "next/link";
import { useState } from "react";

export const NavItem = ({
    item
  }: Readonly<{item: {english: string, shqip: string, url: string}}>) => {
    const [isHovering, setHover] = useState(false);
    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };
    const text = item.english;

    return (
        <li className="navbar-link" onMouseEnter={onHover} onMouseLeave={onLeave}>
            <Link href={item.url}>
                {isHovering && (<span className='blinking cursor'>&gt;</span>)}{text}
            </Link>
        </li>
    )
}
export default NavItem;