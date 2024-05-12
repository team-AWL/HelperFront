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

    const handleLogoClick3 = () => {
        navigate('/user-page');
    };

    const handleSignOut = () => {
        const confirmed = window.confirm('Are you sure you want to sign out?');
        
        if (confirmed) {
            localStorage.removeItem('loggedInUser');
            navigate('/login');
        }
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
                    <li onClick={handleSignOut} style={{cursor: 'pointer'}} className="navItem">Вийти з аккаунту</li>
                </ul>
            </nav>
            <div className="userProfile">
                <img src="/person1.svg" onClick={handleLogoClick3} style={{ cursor: 'pointer' }} alt="User Avatar" className="avatar1" />
            </div>
        </div>
    );
};

export default Header;