import React, { useEffect, useState } from 'react';
import { getUniqueYears } from '../services/NobelPrizeService';
import { Link } from 'react-router-dom';
import { Language } from '../model/Types';
import LanguageSelect from './LanguageSelect';

const WelcomeView = () => {
    const [yearsAwarded, setYearsAwarded] = useState<string[]>([]);
    const [selectedYear, setSelectedYear] = useState<string>("");
    const [selectedLanguage, setSelectedLanguage] = useState<Language>("en")

    useEffect(() => {
        getUniqueYears().then((res) => {
            setYearsAwarded(res)
        })
    },[])
    
    return (
        <div>
            <LanguageSelect setSelectedLanguage={setSelectedLanguage}></LanguageSelect>
            <h1>Siemka byku jaka nagroda dla cb</h1>
            <select name="years" id="years" onChange={e => setSelectedYear(e.target.value)}>
                <option value="-">-</option>
                {yearsAwarded.map((entry: string) => {
                        return <option value={entry}>{entry}</option>
                    })}
            </select>
            <Link to={"nagrody/"+selectedLanguage+"/"+selectedYear}><button disabled={yearsAwarded.indexOf(selectedYear) == -1} ></button></Link>
            
        </div>
    );
};

export default WelcomeView;