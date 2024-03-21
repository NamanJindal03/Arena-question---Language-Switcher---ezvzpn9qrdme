"use client"
// import {  } from '../contexts/LanguageContext';
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
    const languageState = useContext(LanguageContext);

    return (
        <select 
            value={languageState.language} 
            onChange={(e) => languageState.setLanguage(e.target.value)}
        >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            {/* Add more languages as needed */}
        </select>
    );
};

export default LanguageSwitcher;
