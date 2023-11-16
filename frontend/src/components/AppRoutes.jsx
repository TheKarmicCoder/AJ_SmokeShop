// src/Routes.jsx

import {  Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import Home from './Home';
import Contact from './Contact';
import Rewards from "./Rewards";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
