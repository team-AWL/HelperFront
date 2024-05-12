import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Search from './components/Search/search';
import Login from './components/Login/login';
import Home from './components/Home/home';
import Register from './components/Register/register';
import ResetPassword from './components/Forget/Reset_password/reset_password';
import UserPage from './components/User_page/user-page';
import SentEmailAgain from './components/Forget/Sent_email_again/sent_email_again';
import Forget from './components/Forget/forget';
import ProtectedRoute from '../src/utils/ProtectedRoute'
import CustomScrollbar from '../src/utils/CustomScrollbar'

function App() {
  return (
    <Router>
      <CustomScrollbar>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/" element={<Home />} />
        {/* </Route> */}
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/user-page" element={<UserPage />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/sent_email_again" element={<SentEmailAgain />} />
      </Routes>
      </CustomScrollbar>
    </Router>
  );
}

export default App;