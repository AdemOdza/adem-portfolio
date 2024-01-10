import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error-page">
            <h1>Error</h1>
            <body> {"There was an error accessing the page:" }</body>
            <p>
                <i>
                {isRouteErrorResponse(error) ? 
                ((error.statusText || error.data?.message) ? 
                    (error.statusText || error.data?.message) : 
                    'Page Not Found'
                ) : 
                "Page Not Found"}
                </i>
            </p>
        </div>
    );
};

export default ErrorPage;
