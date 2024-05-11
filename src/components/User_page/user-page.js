import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCurrentUser, updateUserInfo } from '../../api';
import './user-page.css';

const UserPage = () => {
    const [usermail, setUsermail] = useState('');
    const [userbio, setUserbio] = useState('');
    const [username, setUsername] = useState('');
    const [editing, setEditing] = useState(false);
    const [editedUsername, setEditedUsername] = useState('');
    const [editedUserbio, setEditedUserbio] = useState('');
    const [userImg, setUserImg] = useState('');
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token_auth = searchParams.get('token');
    const is_true = searchParams.get('reload');
    console.log(token_auth);

    useEffect(() => {
        if (token_auth) {
            localStorage.setItem('accessToken', token_auth);
            getCurrentUserData(token_auth);
        }
    }, []);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            getCurrentUserData(token);
        }
        if (is_true) {
            window.location.replace('/user-page');
        }
    }, []);

    const getCurrentUserData = async (token) => {
        try {
            const userData = await getCurrentUser(token);
            setUserImg(userData.imageUrl);
            setUsermail(userData.email);
            setUserbio(userData.bio);
            setUsername(userData.name);
            setEditedUsername(userData.name);
            setEditedUserbio(userData.bio);
        } catch (error) {
            console.error('Error getting current user data:', error);
        }
    };

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            await updateUserInfo({ bio: editedUserbio, name: editedUsername });
            setEditing(false);
            setUsername(editedUsername);
            setUserbio(editedUserbio);
        } catch (error) {
            console.error('Error updating user info:', error);
        }
    };

    return (
        <div className="main">
            <div className="centeredText">
                <p className="accountInfo">Обліковий запис</p>
            </div>
            <div className="centeredText">
                <p className="requestInfo">Хочу зробити запит про потребу</p>
            </div>
            <div className="info">
                <div className="leftSection">
                    <img src={userImg} alt="Avatar" className="avatar" />
                </div>
                <div className="rightSection">
                    {editing ? (
                        <div className="inputs">
                            <div>
                                <p className="inputLabel">Ваше ім’я</p>
                                <input
                                    type="text"
                                    value={editedUsername}
                                    onChange={(e) => setEditedUsername(e.target.value)}
                                    className="inputField"
                                />
                            </div>
                            <div>
                                <p className="inputLabel">Про вас</p>
                                <input
                                    type="text"
                                    value={editedUserbio}
                                    onChange={(e) => setEditedUserbio(e.target.value)}
                                    className="inputField"
                                />
                            </div>
                            <button className="saveButton" onClick={handleSaveClick}>Зберегти</button>
                        </div>
                    ) : (
                        <div>
                            <p className="username">{username}</p>
                            <p className="usermail">{usermail}</p>
                            {userbio && (
                                <div className="volunteerInfo">
                                    <p>{userbio}</p>
                                </div>
                            )}
                            <button className="saveButton" onClick={handleEditClick}>Редагувати</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserPage;
