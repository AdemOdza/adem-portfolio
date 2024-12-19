import { useState } from "react";

export function useTranslate() {
    const [isEnglish, setEnglish] = useState(true);

    const toggleLanguage = () => {
        setEnglish(!isEnglish);
    }
    

    return [isEnglish, toggleLanguage]
}