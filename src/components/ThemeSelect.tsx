import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeContext } from '../themes/ThemeContext';


const ThemeSelect = () => {
    const {isDarkTheme, setDarkTheme} = useContext(ThemeContext);
    const handleThemeChange = () => {
        if (isDarkTheme){
            setDarkTheme(false);
        } else {
            setDarkTheme(true);
        }
    }
    return (
        <>
            <IconButton aria-label="" onClick={handleThemeChange} color='secondary' size='large'>
                {isDarkTheme ? <LightModeIcon /> : <DarkModeIcon /> }
            </IconButton>
        </>
    );
};

export default ThemeSelect;