import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutMePage from './pages/AboutMePage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import RegulaminPage from './pages/RegulaminPage';
import PolitykaODOPage from './pages/PolitykaODOPage';
import PolitykaPrywatnosciPage from './pages/PolitykaPrywatnosciPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/cart/CartContext';
import CoursesPage from './pages/CoursesPage';
import Cours1Page from './pages/Cours1Page'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/courses/kurs1' element={<Cours1Page />} />
        <Route path='/regulamin' element={<RegulaminPage />}/>
        <Route path='/polityka-prywatnosci' element={<PolitykaPrywatnosciPage />}/>
        <Route path='/polityka-odo' element={<PolitykaODOPage />}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
