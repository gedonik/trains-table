import React from 'react';
import './mainButton.css';

const MainButton = ({children, ...props}) => {
    return (
        <button className="btn" {...props}>
            {children}
        </button>
    );
};

export default MainButton;