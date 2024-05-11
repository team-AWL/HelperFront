import React, { useState } from 'react';
import { ACCESS_TOKEN, GOOGLE_AUTH_URL } from "../../constants";
import { useNavigate } from "react-router-dom";
import { signup } from '../../api';
import './auth.css';

export default function Registration1() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        isHelper: !localStorage.getItem("wantToAskHelp"),
        lastName: "",
        password: ""
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();

        console.log(formData);
        signup(formData)
            .then(response => {
                navigate('/register/stage2'); 
                console.log(response.data.isHelper);
                return response.data;
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className='wrapper'>
            <div className='registration_container'>
                <div className='registration_table'>
                    <h2 className='main_text'>Реєстрація</h2>
                    <p>Вкажіть актуальну інформацію про вас</p>
                    <form onSubmit={handleSubmit}>
                        <div className='inputs_container'>
                            <div className='inputs_table'>
                                <label>Ваше ім'я</label>
                                <input
                                    type='text'
                                    name='firstName'
                                    placeholder="Ім'я"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label>Ваш Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label>Ваш пароль</label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="Пароль"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <a style={{ cursor: "pointer" }} href={GOOGLE_AUTH_URL} className="login-with-google-btn" >
                                    Швидка авторизація
                                </a>
                            </div>
                        </div>

                        <div className='functional_buttons'>
                            <button onClick={() => navigate('/register')}>Назад</button>
                            <button className='continue' type="submit">Далі</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
