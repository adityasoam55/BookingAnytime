import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import HotelList from './components/HotelList';
import Home from './components/Home'; // Add this import

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotellist" element={<HotelList />} />
      </Routes>
    </div>
  );
}

export default App;
