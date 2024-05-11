import React from 'react';
import './section2.css';
const Section2 = () => {

    return (
        <div className='section202'>
            <div className='mission'>
                Наша місія - об'єднати зусилля добровольців, рятувальних служб та організацій,
                щоб збільшити ефективність пошуку і забезпечити безпеку та швидку реакцію в найскладніших ситуаціях.
            </div>
            <div className='mission2'>
            Використати TelegramBot для швидкої реєстрації пошуку зниклих 
            </div>
            <button className="telegram-button">
                <img src="/telegram.svg" alt="Telegram" className="telegram-icon" />
                Telegram
            </button>
        </div>
    );
};

export default Section2;
