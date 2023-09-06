import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import Signup from './components/Signup';
import BookAppointment from './components/BookAppointment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserDetails" element={<UserDetails />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/BookAppointment" element={<BookAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
