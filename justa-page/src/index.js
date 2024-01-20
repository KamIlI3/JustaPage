import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
// import AboutMePage from './pages/AboutMePage'
// import ShopPage from './pages/ShopPage'
// import CartPage from './pages/CartPage'
// import GalleryPage from './pages/GalleryPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/gallery" element={<GalleryPage />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
