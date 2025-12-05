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
          <div className="footer-social mt-4">
            <div className="flex items-center gap-">
              <a
                href="https://wa.me/6281370000299?text=Hi%2C%20I%20want%20to%20ask%20about%20zerOne.id%20service"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-[#25D366] hover:text-[#1ebe57] transition-colors duration-200 transition-all duration-300 hover:scale-115 hover:shadow-2xl cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
              </a>

              <a
                href="https://www.instagram.com/zerone.global/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] bg-clip-text text-transparent hover:opacity-90 transition-opacity duration-200 transition-all duration-300 hover:scale-115 hover:shadow-2xl cursor-pointer"
              >
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>

              <a
                href="https://www.facebook.com/global.zerone"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#1877F2] hover:text-[#145db8] transition-colors duration-200 transition-all duration-300 hover:scale-115 hover:shadow-2xl cursor-pointer"
              >
                <i className="fa-brands fa-facebook text-2xl"></i>
              </a>

              <a
                href="https://www.youtube.com/@zeroneglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#FF0000] hover:text-[#cc0000] transition-colors duration-200 transition-all duration-300 hover:scale-115 hover:shadow-2xl cursor-pointer"
              >
                <i className="fa-brands fa-youtube text-2xl"></i>
              </a>

              <a
                href="https://www.threads.com/@zerone.global"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-neutral-700 dark:text-white dark:hover:text-neutral-300 transition-colors duration-200 transition-all duration-300 hover:scale-115 hover:shadow-2xl cursor-pointer"
              >
                <i className="fa-brands fa-threads text-2xl"></i>
              </a>
            </div>
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
