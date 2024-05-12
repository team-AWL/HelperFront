import React from 'react'
import './footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footerinfo">
                <div className="footeremail">
                    <div className="footeremail1">
                        <p>
                            Використати TelegramBot для швидкої<br />
                            реєстрації пошуку зниклих
                        </p>
                    </div>
                    <div className="footeremail2">
                        <a href="#"><button className="telegram-button">
                            <img src="/telegram.svg" alt="Telegram" className="telegram-icon" />
                            Telegram
                        </button></a>
                    </div>
                </div>
                <div className="socialnet">
                    <div className="leftSection">
                        <div className="logo">
                            <img src="/logo.svg" alt="Логотип" />
                            <div className="logoText"> UnityHelp </div>
                        </div>
                        <div className="aboutus">
                            <p>Про нас</p>
                            <p>Зареєструватись</p>
                            <p>Потреби</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <p>Всі права захищено</p>
            </div>
        </div>

    )
}

export default Footer
