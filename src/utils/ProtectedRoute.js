import { Outlet, Navigate } from 'react-router-dom'
import axios from 'axios';

const ProtectedRoute = () => {
    let auth = {token: localStorage.getItem('accessToken')}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoute