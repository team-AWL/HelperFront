import React, { useState } from 'react';
import './modal.css';
import { createAnnouncement, login } from "../../../../api";
import {useNavigate} from "react-router-dom";
import loadData from '../../ItemHelp/itemHelp.js'

const Modal = ({ handleCloseModal }) => {
    const navigate = useNavigate();
    const [formData, setFormDataFundraising] = useState({
        fullNameOfPerson: "",
        location: "",
        description: "",
        imageUrl: "",
        contactInformation: "",
        seemLastTime: ""
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormDataFundraising(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePhotoChange = event => {
        const { name, files } = event.target;
        const imageUrl = URL.createObjectURL(files[0]);
        setFormDataFundraising(prevState => ({
            ...prevState,
            [name]: imageUrl
        }));
    };
    const handleSubmit = event => {
        event.preventDefault();
        createAnnouncement(formData).then(response => {
            handleCloseModal();
            window.location.reload()
        })
            .catch(error => {
                console.log(error);
            });


    };

    return (
        <div className="modal">
            <span className="close-icon" onClick={handleCloseModal}>✕</span>
            <h2 className="title5">Потребуєш допомоги в пошуці зниклого?</h2>
            <p className="dataInput">Введи дані:</p>
            <form onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <div className='modal-first-section'>
                        <div className='modal-4inputs'>
                            <input
                                type="text"
                                name="fullNameOfPerson"
                                value={formData.fullNameOfPerson}
                                placeholder="Ім'я, Прізвище"
                                className="input"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name='location'
                                value={formData.location}
                                placeholder="Локація"
                                className="input"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name='seemLastTime'
                                value={formData.seemLastTime}
                                placeholder="Дата останнього зв'язку(день.місяць.рік)"
                                className="input"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name='imageUrl'
                                value={formData.imageUrl}
                                placeholder="Введіть силку на фотографію"
                                className="input"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name='contactInformation'
                                value={formData.contactInformation}
                                placeholder="Спосіб зв'язку"
                                className="input"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name='description'
                                value={formData.description}
                                placeholder="Опис"
                                className="input"
                                onChange={handleInputChange}
                            />
                        </div>

                    </div>
                    <button className="registerButton5">
                        Зареєструвати
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Modal;
