import React from 'react';
import './errorFetch.css';

const ErrorFetch = ({error}: any) => {
    return (
        <div className="error">
            <h2 className="error__title">There is error: {error}</h2>
        </div>
    );
};

export default ErrorFetch;