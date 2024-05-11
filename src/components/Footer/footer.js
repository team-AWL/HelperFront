import React from 'react'
import './footer.css';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footerinfo">
                <div className="footeremail">
                    <div className="footeremail1">
                        <p>
                            Надішли свій Email та отримуй<br />
                            сповіщення про нові запити
                        </p>
                    </div>
                    <div className="footeremail2">
                        <input name="email" type="email" placeholder="твій Email..." />
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
