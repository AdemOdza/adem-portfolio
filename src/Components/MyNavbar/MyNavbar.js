import React from 'react'
import './MyNavbar.css'
import LinkButton from '../LinkButton/LinkButton'
import DropdownButton from '../DropdownButton/DropdownButton'
import {Navbar} from 'reactstrap';

function MyNavbar() {
    return(
    <div> 
        <Navbar id="navbar-background" expand="md"> 
            
            <h2 id="navbar-title">
                Adem Odza
            </h2>

            <LinkButton label="Home" url="/"/>

            <DropdownButton label="Projects"/>
        
            <LinkButton label="GitHub" url="https://github.com/AdemOdza" target="_blank"/>

            <LinkButton label="LinkedIn" url="https://www.linkedin.com/in/adem-odza/" target="_blank"/>
            

        </Navbar> 
    </div>

    );
}

export default MyNavbar