import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; // Import your Header component
import Login from './Components/Auth/login';
import Signup from './Components/Auth/signup';
import Home from './Components/Home'; // Import Home page if you have it
import Footer from './Components/Footer'; // Corrected import to match the file name

function App() {
  return (
    <Router>
      <Header /> {/* Render Header once at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer /> {/* Render Footer once at the bottom */}
    </Router>
  );
}

export default App;
