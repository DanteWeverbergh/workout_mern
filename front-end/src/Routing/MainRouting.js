import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from '../Pages/Auth/Register';
import Home from '../Pages/Home/Home';

function MainRouting() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home />} />
        {/**Auth routes */}
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default MainRouting;
