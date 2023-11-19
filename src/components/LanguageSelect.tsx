import { Language, flagMap } from "../model/Types";
import { ToggleButtonGroup, ToggleButton } from '@mui/material';


const LanguageSelect = (props : {setSelectedLanguage: (lang : Language) => void, selectedLanguage : Language} ) => {



    return (
        <div className="language-select">
            <ToggleButtonGroup
             value={props.selectedLanguage}
             exclusive
             onChange={(e, value) => props.setSelectedLanguage(value)}
            >
                {["en", "se", "no"].map(lang => {
                    return <ToggleButton value={lang}>{flagMap.get(lang)}</ToggleButton>
                    
                })}
            </ToggleButtonGroup>
        </div>
    );
};

export default LanguageSelect;