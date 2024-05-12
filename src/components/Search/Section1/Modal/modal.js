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

    // const handleInputChange = event => {
    //     const { name, value } = event.target;
    //     setFormDataFundraising(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };

    // const handleFundraising = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const token = localStorage.getItem('accessToken');
    //         const responseData = await registerFundraising(formDataFundraising, token);
    //         console.log('Response data:', responseData);
    //         handleCloseModal();
    //         window.location.reload();
    //     } catch (error) {
    //         console.error('Error handling fundraising:', error);
    //     }
    // };

    return (
        <div className="modal">
            <span className="close-icon" onClick={handleCloseModal}>✕</span>
            <h2 className="title99">Потребуєш допомоги в пошуці зниклого?</h2>
            <p className="dataInput">Введи дані:</p>
            <input
                type="text"
                name="goalName"
                value={formDataFundraising.goalName}
                placeholder="Назва"
                className="input"
            />
            <input
                type="text"
                name='forWhom'
                value={formDataFundraising.forWhom}
                placeholder="Для кого"
                className="input"
            />
            <input
                type="text"
                name='moneyGoal'
                value={formDataFundraising.moneyGoal}
                placeholder="Сума"
                className="input"
            />
            <input
                type="text"
                name='needyThing'
                value={formDataFundraising.needyThing}
                placeholder="На що збираєте"
                className="input"
            />
            <input
                type="text"
                name='description'
                value={formDataFundraising.description}
                placeholder="Опис"
                className="input"
            />
            <button
                className="registerButton"
            >
                Зареєструвати
            </button>
        </div>
    );
};

export default Modal;
