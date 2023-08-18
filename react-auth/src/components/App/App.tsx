import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './LoginRegisterForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Nav from '../Nav/Nav';

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
