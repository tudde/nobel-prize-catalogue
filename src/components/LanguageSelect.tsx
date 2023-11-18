import { Language } from "../model/Types";


const LanguageSelect = (props : {setSelectedLanguage: (lang : Language) => void}) => {
    
    return (
        <div className="language-select">
            <div onClick={e => props.setSelectedLanguage("en")}>EN🇬🇧</div>
            <div onClick={e => props.setSelectedLanguage("se")}>SE🇸🇪</div>
            <div onClick={e => props.setSelectedLanguage("no")}>NO🇳🇴</div>
        </div>
    );
};

export default LanguageSelect;