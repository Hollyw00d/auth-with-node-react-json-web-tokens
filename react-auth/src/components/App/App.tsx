import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './LoginRegisterForm.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Nav from '../Nav/Nav';

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
