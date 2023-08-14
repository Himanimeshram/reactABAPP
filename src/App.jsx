import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/UserDetails" element={<UserDetails />} />
        {/* Other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
