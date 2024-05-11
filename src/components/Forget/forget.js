import React, { useState } from 'react';
import { login } from '../../api';
import './forget.css';
import { Link, useNavigate } from 'react-router-dom';

const Forget = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        navigate('/sent_email_again');
        
        // login(formData)
        //     .then(response => {
        //         if (response.token) {
        //             localStorage.setItem('accessToken', response.token);
        //         }
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
    };

    return (
        <div className='wrapper'>
            <div className='registration_container'>
                <div className='registration_table'>
                    <h2 className='main_text'>Вхід</h2>
                    <p className='under_main_text'>Забули пароль?</p>
                    <p className='text_about_forget'>Вам потрібно ввести електронну адресу, пов'язану з його обліковим записом</p>
                    <form 
                    onSubmit={handleSubmit}
                    >
                        <div className='inputs_container'>
                            <div className='inputs_table'>
                                <label className='label_under_login'>Ваш Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className='enter'>
                            <Link to='/'>Повернутись на головну</Link>
                            <button className='continue' type='submit'>Надіслати</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Forget;
