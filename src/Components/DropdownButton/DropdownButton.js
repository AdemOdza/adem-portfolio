import React, {useState} from 'react'
import '../MyNavbar/MyNavbar.css'
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

//Compact button component
//Set prop 'target' to "_blank" to open the link in a new tab 
function DropdownButton(props) {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return(
        <>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>

                <DropdownToggle caret className="button-background">
                    <text className="button-text">{props.label}</text>
                </DropdownToggle>
                
                <DropdownMenu>
                    <DropdownItem href="/codubee"> Codubee Recipe Maker </DropdownItem>
                </DropdownMenu>

            </ButtonDropdown>
        </>
    )
}
    
export default DropdownButton
