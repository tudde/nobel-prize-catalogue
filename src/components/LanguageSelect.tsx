
import { Language } from "../model/Types";
import Button from '@mui/material/Button'

import { ToggleButtonGroup, ToggleButton } from '@mui/material';


const LanguageSelect = (props : {setSelectedLanguage: (lang : Language) => void, selectedLanguage : Language} ) => {

    return (
        <div className="language-select">
            <ToggleButtonGroup
             value={props.selectedLanguage}
             exclusive
             onChange={(e, value) => props.setSelectedLanguage(value)}
            >
                <ToggleButton value="en">
                    EN
                </ToggleButton>
                <ToggleButton value="se">
                    SE
                </ToggleButton>
                <ToggleButton value="no">
                    NO
                </ToggleButton>

            </ToggleButtonGroup>
           
        </div>
    );
};

export default LanguageSelect;