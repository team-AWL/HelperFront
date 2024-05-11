import { useState } from "react";
import { NavLink } from "react-router-dom";
import { login } from "../../api";
import { GOOGLE_AUTH_URL } from "../../constants";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
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

        login(formData)
            .then(response => {
                if (response.token) {
                    localStorage.setItem('accessToken', response.token);
                    window.location.replace('/');
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className='wrapper'>
            <div className='registration_container'>
                <div className='registration_table'>
                    <h2 className='main_text'>Вхід</h2>
                    <p className='under_main_text'>Раді Вас знову вітати!</p>
                    <form onSubmit={handleSubmit}>
                        <div className='inputs_container'>
                            <div className='inputs_table'>
                                <label className='label_under_login'>Ваш Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label className='label_under_login'>Ваш пароль</label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="********"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <p className='forget_password_button'>
                                    <NavLink to='/forget' style={{ color: 'black', textDecoration: 'none', fontWeight: '800'}}>Забули пароль?</NavLink>
                                </p>
                                <a href={GOOGLE_AUTH_URL} className="login-with-google-btn">
                                    Швидка авторизація
                                </a>
                            </div>
                        </div>
                        <div className='enter'>
                            <button className='continue' type="submit">Увійти</button>
                        </div>
                        <p className='registerLinkText'>
                            Немає облікового запису? Тоді можете{' '}
                            <NavLink to='/register' style={{ color: 'black', textDecoration: 'none', fontWeight: '800'}}>створити його</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
