import { useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {login, signup} from "../../api";
import { GOOGLE_AUTH_URL } from "../../constants";

export default function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name:"",
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

        signup(formData)
            .then(response => {
                console.log(response)
                if (response.success === true) {

                    navigate("/login")
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
                    <h2 className='main_text'>Реєстрація</h2>
                    <p className='under_main_text'>Вкажіть актуальну інформацію про вас</p>
                    <form onSubmit={handleSubmit}>
                        <div className='inputs_container'>
                            <div className='inputs_table'>
                                <label className='label_under_login'>Ваше ім’я та прізвище</label>
                                <input
                                    type='text'
                                    name='name'
                                    placeholder="Ім’я та прізвище"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label className='label_under_login'>Ваш Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <label className='label_under_login'>Введіть пароль</label>
                                <input
                                    type='password'
                                    name='password'
                                    placeholder="********"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                                <p className='forget_password_button'>
                                    <NavLink to='/forget' style={{ color: 'black', textDecoration: 'none', fontWeight: '800' }}>Забули пароль?</NavLink>
                                </p>
                                <a href={GOOGLE_AUTH_URL} className="login-with-google-btn">
                                    Швидка авторизація
                                </a>
                            </div>
                        </div>
                        <div className='enter'>
                            <button className='continue' type="submit">Зареєструватись</button>
                        </div>
                        <p className='registerLinkText'>
                        Вже існує обліковий запис? Тоді  {' '}
                            <span style={{ color: 'black', fontWeight: '800' }}></span>
                            {' '}
                            <NavLink to='/login' style={{ color: 'black', textDecoration: 'none', fontWeight: '800' }}>увійди </NavLink>
                             до нього
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
