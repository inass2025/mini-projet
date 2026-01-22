import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import About from './About';
import Contact from './contact';
import Services from './service';
import footer from './footeer';
export default function Menu() {
return (
<BrowserRouter>

<Navbar />
<div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <footer />
</div>

</BrowserRouter>
);
}