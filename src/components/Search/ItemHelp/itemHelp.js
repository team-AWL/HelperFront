import React from 'react';
import './itemHelp.css'

const ItemHelp = () => {
    return (
        <div className="helper11">
            <div className="divided">
                <div className="leftSection11">
                    <div className="item1">
                        <span className="itemText">ПІБ</span>
                        <span className="itemNumber">Шевченко Людмила</span>
                    </div>
                    <div className="item1">
                        <span className="itemText">Локація</span>
                        <span className="itemNumber">Луганськ</span>
                    </div>
                    <div className="item1">
                        <span className="itemText">Дата</span>
                        <span className="itemNumber">10 травня</span>
                    </div>
                    <div className="item1">
                        <span className="itemText">Опис</span>
                    </div>
                    <div>
                        <p className="quoteContent1">32 роки. Вона висока, приблизно 175 см,
                            з довгими русявими волоссямі та карими очима. Останній раз її бачили
                            в районі вулиці Шевченка у місті Луганськ 10 травня о 17:00.
                        </p>
                    </div>
                </div>
                <div className="rightSection11">
                    <img src="/itemHelp.svg" alt="Extra" className="extraImage" />
                    <div className="learnMore">
                        <p className="learnMoreText">Відгукнутись</p>
                        <img src="/arrow2.svg" alt="Arrow" className="arrowIcon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemHelp;
