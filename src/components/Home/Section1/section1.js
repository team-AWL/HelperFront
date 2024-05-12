import React from 'react';
import './section1.css';
import { useNavigate } from 'react-router-dom';
const Section1 = () => {

    const navigate = useNavigate();
    const handleLogoClick3 = () => {
        navigate('/search');
    };

    return (
        <div className='section1'>
            <div className='divided'>
                <div className='rightSection1'>
                    <img src="/section1.svg" alt="Extra" className='extraImage' />
                </div>
                <div className='leftSection1'>
                    <div className='quote'>
                        <p className='quoteContent'>"Платформа 'UnityHelp' є інноваційним інструментом,
                            створеним з метою координації пошуку зниклих осіб в зонах військового конфлікту.</p>
                    </div>
                    <div className="find-lost">
                        <img src="/big-arrow.svg" alt="Big Arrow" className="big-arrow" />
                        <button className="search-button" onClick={handleLogoClick3}>Пошук зниклих</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
