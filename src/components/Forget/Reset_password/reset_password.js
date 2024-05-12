import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { resetPassword } from '../../../api';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        password: '',
        confirm_password: ''
    });
    const { token } = useParams();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (formData.password === formData.confirm_password) {
            const body = { password: formData.password, token };
            resetPassword(body)
                .then(response => {
                    navigate('/login');
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            console.log("Passwords do not match");
        }
    };

    return (
        <div className='wrapper'>
            <div className='registration_container'>
                <div className='registration_table'>
                    <h2 className='main_text'>Вхід</h2>
                    <p className='under_main_text'>Забули пароль?</p>
                    <p className='text_about_forget'>Ваш новий пароль має відрізнятись від попереднього</p>
                    <form onSubmit={handleSubmit}>
                        <div className='inputs_container'>
                            <div className='inputs_table'>
                                <label className='label_under_login'>Вкажіть пароль</label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder='Пароль'
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label className='label_under_login'>Повторіть його</label>
                                <input
                                    type='password'
                                    name='confirm_password'
                                    placeholder='Повторіть пароль'
                                    value={formData.confirm_password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className='enter'>
                            <button className='continue' type='submit'>
                                Підтвердити
                            </button>
                        </div>
                        <p>
                            Немає облікового запису? Тоді можете{' '}
                            <Link style={{ color: 'blue' }} to='/register'>
                                створити його
                            </Link>{' '}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
