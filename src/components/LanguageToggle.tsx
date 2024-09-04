import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
//import UsFlag from 'https://en.wikipedia.org/wiki/United_States#/media/File:Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg';
import ReactSVG from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

const LanguageToggle = ({isEnglish, onToggle}: {isEnglish: boolean, onToggle: () => void}) => {

    // const StyledSwitch = () => {
    //     return <Switch defaultChecked 
    //     checkedIcon = {<svg
    //         xmlns="https://en.wikipedia.org/wiki/United_States#/media/File:Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg"
    //         width="5"
    //         height="5"
    //         fill="currentColor"
    //         viewBox="0 0 16 16"
    //       />}
    //     // icon = {<UsFlag/>}
    //     />
    // };
    
    return(
        <Switch defaultChecked value = {isEnglish} onClick = {onToggle} />
       // <StyledSwitch/>
    )
};

export default LanguageToggle;
