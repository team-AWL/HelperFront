import React, { useState } from 'react';
import './section1.css';
import Modal from './Modal/modal';

const Section1 = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
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
                        <button className="search-button" onClick={toggleModal}>Повідомити про зниклого</button>
                    </div>
                </div>
            </div>
            {showModal && <Modal handleCloseModal={toggleModal} />}
        </div>
    );
};

export default Section1;
