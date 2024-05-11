import React from 'react'
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="/logo.svg" alt="Логотип" />
                <div className="logoText"> UnityHelp </div>
            </div>
            <nav className="nav">
                <ul className="navList">
                    <li className="navItem" style={{ cursor: "pointer" }} >Пошук зниклих</li>
                    <li className="navItem">FAQ</li>
                    <li className="navItem">Про нас</li>
                </ul>
            </nav>
            <div className="userProfile">
                <img src="/person1.svg" alt="User Avatar" className="avatar" />
            </div>
        </div>
    )
}

export default Header
