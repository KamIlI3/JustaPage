import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavMenu from './NavMenu';
import reportWebVitals from './reportWebVitals';
import Presentation from './Presentation';
import AboutMe  from './Omnie';
import Gallery from './Gallery';
import Contact from './Contact';
import SocialMedia from './SocialMedia';
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavMenu />
    <Presentation />
    <AboutMe />
    <Gallery />
    <Contact />
    <SocialMedia />
    <Footer />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();