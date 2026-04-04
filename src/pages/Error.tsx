import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error-page">
            <h1>Error</h1>
            <p>{"There was an error accessing the page:"}</p>
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
