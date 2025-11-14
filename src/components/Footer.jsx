// src/components/Footer.jsx
import React from "react";
import "../css/Footer.css"; // Pastikan menambahkan file CSS untuk styling
import { logos } from "../data";


// Pastikan Footer adalah fungsi komponen
const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container mx-auto mt-10 pb-9 grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-4 lg:px-25 lg:justify-items-center">
        <div className=" ">
          <div className="footer-logo">
            <img src={logos.whitelogo} alt="zerOne.id" />
            <span>
              Empowering innovation and enabling success for schools,
              organizations, and communities across Southeast Asia.
            </span>
          </div>
          <div className="footer-social">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>

        <div className="footer-section border-l-1 pl-9">
          <h3>PRODUCT</h3>
          <ul>
            <li>
              <a href="/how-it-works">How it works</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="footer-section border-l-1 pl-9">
          <h3>ABOUT FORM</h3>
          <ul>
            <li>
              <a href="/our-team">Our team</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/press">Press</a>
            </li>
            <li>
              <a href="/stores">Stores</a>
            </li>
          </ul>
        </div>
        <div className="footer-section border-l-1 pl-9 ">
          <h3>TERDAFTAR DI</h3>
          <img src={logos.komdigi} alt="komdigi" className="mt-6" />
        </div>
      </div>
      <div className="footer-bottom mt-9 pt-10 border-t-1 border-grey-200 text-center pb-2">
        <span>©2025 - zerone.id | All right reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
