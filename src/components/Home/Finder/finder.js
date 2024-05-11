import React from 'react';
import './finder.css';

const Finder = () => {
    return (
        <div className="register-input-container">
            <input className="register-input" type="name" name="retypePassword" placeholder="" />
            <img className="loop-icon" src="/loop.svg" alt="Loop Icon" />
        </div>
    );
};

export default Finder;
