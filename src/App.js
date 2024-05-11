import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './components/Home/home';
import Login from './components/Login/login';
import Register from './components/Register/register';
import Register1 from './components/Register/stage1';
import Register2 from './components/Register/stage2';
import ResetPassword from './components/Reset_password/reset_password';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/stage1" element={<Register1 />} />
        <Route path="/register/stage2" element={<Register2 />} />
        <Route path="/reset_password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
