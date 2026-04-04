import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { errorTranslations } from '../translations';

const ErrorPage = () => {
    const error = useRouteError();
    const { language } = useLanguage();
    const t = errorTranslations[language];

    if (process.env.NODE_ENV !== 'production') {
        console.error(error);
    }

    return (
        <div id="error-page">
            <h1>{t.heading}</h1>
            <p>{t.body}</p>
            <p>
                <i>
                    {isRouteErrorResponse(error)
                        ? ((error.statusText || error.data?.message) || t.notFound)
                        : t.notFound}
                </i>
            </p>
        </div>
    );
};

export default ErrorPage;
