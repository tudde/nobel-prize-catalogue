import React, { useEffect, useState } from 'react';
import { getUniqueYears } from '../services/NobelPrizeService';
import { Link } from 'react-router-dom';
import { Language } from '../model/Types';
import LanguageSelect from './LanguageSelect';
import {FormControl, Select, SelectChangeEvent, MenuItem, Typography, Container, Stack,  IconButton} from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ThemeSelect from './ThemeSelect';


const WelcomeView = () => {
    const [yearsAwarded, setYearsAwarded] = useState<string[]>([]);
    const [selectedYear, setSelectedYear] = useState<string>("-");
    const [selectedLanguage, setSelectedLanguage] = useState<Language>("en")

    useEffect(() => {
        getUniqueYears().then((res) => {
            setYearsAwarded(res)
        })
    },[])

    const handleSelectChange = (e : SelectChangeEvent) => {
        setSelectedYear(e.target.value)
    }

    const isButtonDisabled = () => {
        return yearsAwarded.indexOf(selectedYear) === -1
    }
    
    return (
        <>
        <Container maxWidth={false}  sx={{display: "flex", justifyContent: "space-between", height: "50px"}}>
            <LanguageSelect setSelectedLanguage={setSelectedLanguage} selectedLanguage={selectedLanguage}></LanguageSelect>
            <ThemeSelect></ThemeSelect>
        </Container>
        <Container>
            <Stack>
                <Typography variant="h2">Nobel Prize catalogue</Typography>

                <Container disableGutters={true} sx={{ display: 'inline-flex', justifyContent: 'space-between'}}>
                    <FormControl sx={{flexGrow:1}}>
                        <Select  onChange={handleSelectChange} value={selectedYear}>
                            <MenuItem value={"-"} selected>-</MenuItem>
                            {yearsAwarded.map((entry, index) => {return <MenuItem key={index} value={entry}>{entry}</MenuItem>})}
                        </Select>      
                    </FormControl>
                    <Link to={isButtonDisabled() ? "#" : "nagrody/"+selectedLanguage+"/"+selectedYear}>
                        <IconButton 
                        disabled={isButtonDisabled()}
                        color='secondary'
                        size='large'>
                            <ArrowForwardIosIcon/>
                        </IconButton>
                    </Link>
                </Container>
            </Stack>
        </Container>
        </>
    );
};

export default WelcomeView;