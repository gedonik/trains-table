import React from "react";
import "./mainLoader.css";

const MainLoader: React.FC = () => {
    return (
        <div className="loader-wrapper">
            <div className="loader">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default MainLoader;