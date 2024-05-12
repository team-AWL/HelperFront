import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from './constants.js';

export async function signup(body) {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, body);
    return response.data;
}

export async function login(body) {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, body);
    return response.data;
}


export async function getCurrentUser(token) {
    const config = {
        headers: {
            Authorization: `${token}`
        }
    };

    try {
        const response = await axios.get(`${API_BASE_URL}/users/`, config);
        return response.data;
    } catch (error) {
        console.error('Error getting current user:', error);
        throw error;
    }
}

export async function resetPassword(formData) {
    try {
        const response = await axios.post(`${API_BASE_URL}/users/forgot`, formData);
        return response.data;
    } catch (error) {
        console.error('Error getting current user:', error);
        throw error;
    }
}

export async function updateUserInfo(userInfo) {
    const token = localStorage.getItem('accessToken');
    const config = {
        headers: {
            Authorization: `${token}`
        }
    };

    try {
        const response = await axios.post(`${API_BASE_URL}/users/update/optionalInfo`, userInfo, config);
        return response.data;
    } catch (error) {
        console.error('Error updating user info:', error);
        throw error;
    }
}
