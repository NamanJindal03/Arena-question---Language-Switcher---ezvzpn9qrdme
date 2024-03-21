import { createContext, useState } from "react";
import { useContext } from "react";

export const LanguageContext = createContext();


export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("en");
    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguageContext = () => {
    return useContext(LanguageContext);
}
