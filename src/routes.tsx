import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import Configurations from './pages/Configurations';
import Footer from './components/Footer';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/configurations" element={<Configurations />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
