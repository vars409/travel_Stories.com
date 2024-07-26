import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/destinations" element={<div>Destinations</div>} />
            <Route path="/bookings" element={<div>Bookings</div>} />
            <Route path="/profile" element={<div>Profile</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
