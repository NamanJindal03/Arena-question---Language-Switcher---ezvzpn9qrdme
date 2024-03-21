"use client"
import LanguageSwitcher from '../components/LanguageSwitcher';
// import {  } from '../contexts/LanguageContext';
import { useContext } from "react";
import { LanguageContext } from "@/contexts/LanguageContext";

const Home = () => {
    const languageState = useContext(LanguageContext);

    const content = {
        en: {
            welcome: 'Welcome to Next.js!'
        },
        fr: {
            welcome: 'Bienvenue à Next.js!'
        },
        es: {
            welcome: '¡Bienvenido a Next.js!'
        }
        // ... add other languages and translations as needed
    };

    return (
        <div>
            <h1>{content[languageState.language].welcome}</h1>
            <LanguageSwitcher />
        </div>
    );
};

export default Home;
