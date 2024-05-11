import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleLogoClick2 = () => {
        navigate('/search');
    };

    return (
        <div className="header">
            <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <img src="/logo.svg" alt="Логотип" />
                <div className="logoText"> UnityHelp </div>
            </div>
            <nav className="nav">
                <ul className="navList">
                    <li className="navItem" onClick={handleLogoClick2} style={{ cursor: 'pointer' }}>Пошук зниклих</li>
                    <li className="navItem">FAQ</li>
                    <li className="navItem">Про нас</li>
                </ul>
            </nav>
            <div className="userProfile">
                <img src="/person1.svg" alt="User Avatar" className="avatar" />
            </div>
        </div>
    );
};

export default Header;