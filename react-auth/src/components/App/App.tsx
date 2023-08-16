import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './LoginRegisterForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from '../Login/Login';
import Register from '../Register/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
