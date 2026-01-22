

import React from "react";
import tik from "./tik.jpg";
import imageinsta from "./imageinsta.jpg";
import face2 from "./face2.jpg";
import "./footer.css";

export default function Footer() {
  return (
   <footer className="mt-auto shadow-sm pt-5 pb-4">
  <div className="container">

    {/* top brand centered */}
    <div className="footer-brand-block">
      <h5 className="footer-brand-title">Your-Luxe</h5>
      <p className="footer-brand-desc">
        Your trusted platform for easy and safe car rentals.
      </p>
    </div>

    <div className="row text-center text-md-start">

      {/* LOCATIONS */}
      <div className="col-md-4 mb-4">
        <h5 className="footer-title">Our Locations</h5>
        <ul className="list-unstyled">
          <li>Marrakech</li>
          <li>Rabat</li>
          <li>Salé</li>
          <li>Casablanca</li>
        </ul>
      </div>

      {/* SERVICES */}
      <div className="col-md-4 mb-4">
        <h5 className="footer-title">Our Services</h5>
        <ul className="list-unstyled">
          <li>Car Rentals</li>
          <li>Airport Pickup & Drop</li>
          <li>Luxury & Economy Cars</li>
          <li>24/7 Customer Support</li>
        </ul>
      </div>

     {/* CONTACT */}
<div className="col-md-4 mb-4">
  <h5 className="footer-title">Contact Us</h5>

  <p>45 Avenue Mohammed V</p>
  <p>Rabat, Morocco</p>
  <p><a href="tel:+212644477788">+212 6 444 777 88</a></p>
  <p><a href="mailto:Your-LuxeV@gmail.com">Your-LuxeV@gmail.com</a></p>

  {/* Social Icons */}
  <div className="footer-social">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img src={imageinsta} alt="Instagram" />
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img src={face2} alt="Facebook" />
    </a>
    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
      <img src={tik} alt="TikTok" />
    </a>
  </div>
</div>


    </div>
  </div>
  
         

  <div className="text-center text-white footer-bottom">
    © {new Date().getFullYear()} YourLuxe. All rights reserved.
  </div>
</footer>

  );
}
