import React, { useState } from 'react';
import './modal.css';

const Modal = ({ handleCloseModal }) => {
    const [formDataFundraising, setFormDataFundraising] = useState({
        description: "",
        forWhom: "",
        goalName: "",
        imageUrl: "",
        moneyGoal: "",
        needyThing: ""
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

    return (
        <div className="modal">
            <span className="close-icon" onClick={handleCloseModal}>✕</span>
            <h2 className="title5">Потребуєш допомоги в пошуці зниклого?</h2>
            <p className="dataInput">Введи дані:</p>
            <div className="inputContainer">
                <div className='modal-first-section'>
                    <div className='modal-4inputs'>
                        <input
                            type="text"
                            name="goalName"
                            value={formDataFundraising.goalName}
                            placeholder="Назва"
                            className="input"
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name='forWhom'
                            value={formDataFundraising.forWhom}
                            placeholder="Для кого"
                            className="input"
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name='moneyGoal'
                            value={formDataFundraising.moneyGoal}
                            placeholder="Сума"
                            className="input"
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name='needyThing'
                            value={formDataFundraising.needyThing}
                            placeholder="На що збираєте"
                            className="input"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='modal-photo'>
                        <label htmlFor="photoInput" className="photoInputLabel">Фото</label>
                        <input
                            type="file"
                            id="photoInput"
                            name='imageUrl'
                            className="photoInput"
                            onChange={handlePhotoChange}
                        />
                        {formDataFundraising.imageUrl && (
                            <img src={formDataFundraising.imageUrl} alt="Selected" className="selectedPhoto" />
                        )}
                    </div>
                </div>
                <input
                    type="text"
                    name='description'
                    value={formDataFundraising.description}
                    placeholder="Опис"
                    className="fullWidthInput"
                    onChange={handleInputChange}
                />
            </div>
            <button className="registerButton5">
                Зареєструвати
            </button>
        </div>
    );
};

export default Modal;
