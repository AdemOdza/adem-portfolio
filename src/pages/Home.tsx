import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { homeTranslations } from '../translations';

const Home = () => {
    const { language } = useLanguage();
    const t = homeTranslations[language];

    return (
        <div className="App" id="bruh">
            <h1>{t.heading}</h1>
            <div><br /></div>
            <p>{t.body}</p>
        </div>
    );
};

export default Home;
