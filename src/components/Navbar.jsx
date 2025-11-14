import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { logos } from "../data";

import "../css/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const menuRef = useRef(null);

  // Close menu when clicking outside (mobile) and lock body scroll when open
  useEffect(() => {
    const handleOutside = (e) => {
      if (!menuRef.current) return;
      if (!isMenuOpen) return;
      if (!menuRef.current.contains(e.target) && !e.target.closest('.md:hidden')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('mousedown', handleOutside);
      window.addEventListener('touchstart', handleOutside);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('mousedown', handleOutside);
      window.removeEventListener('touchstart', handleOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animated underline: move a single underline element to active/hovered link
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const updateUnderline = () => {
      const active = menu.querySelector(".nav-item.active");
      if (active) {
        const left = active.offsetLeft;
        const width = active.offsetWidth;
        menu.style.setProperty("--u-left", `${left}px`);
        menu.style.setProperty("--u-width", `${width}px`);
        menu.classList.add("underline-visible");
      } else {
        menu.classList.remove("underline-visible");
      }
    };

    // Hover interactions: move underline to hovered item, restore to active on leave
    const onMouseOver = (e) => {
      const target = e.target.closest(".nav-item");
      if (!target || !menu.contains(target)) return;
      const left = target.offsetLeft;
      const width = target.offsetWidth;
      menu.style.setProperty("--u-left", `${left}px`);
      menu.style.setProperty("--u-width", `${width}px`);
      menu.classList.add("underline-visible");
    };

    const onMouseOut = (e) => {
      // restore active
      updateUnderline();
    };

    // initial update
    const t = setTimeout(updateUnderline, 50);
    window.addEventListener("resize", updateUnderline);
    menu.addEventListener("mouseover", onMouseOver);
    menu.addEventListener("mouseout", onMouseOut);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", updateUnderline);
      menu.removeEventListener("mouseover", onMouseOver);
      menu.removeEventListener("mouseout", onMouseOut);
    };
  }, [location.pathname, isMenuOpen]);

  return (
    <div
      className={`mx-auto navbar py-7 flex items-center justify-between px-4 md:px-16 lg:px-32 ${
        isScrolled ? "scrolled" : ""
      } ${!isHomePage ? "non-home" : ""}`}
    >
      <nav className="container mx-auto flex justify-between">
        <div className="logo">
          <img
            src={isHomePage && !isScrolled ? logos.whitelogo : logos.bluelogo}
            alt="Zerone Logo"
            className="w-[90px] md:w-[105px] h-[36px] md:h-[42px] object-contain"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((s) => !s)} // Toggle menu visibility
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Menu */}
        <div
          id="main-navigation"
          ref={menuRef}
          className={`menu container mx-auto md:flex md:items-center md:gap-8 fixed left-1/2 -translate-x-1/2 md:static md:translate-x-0 ${
            isMenuOpen
              ? "top-20 opacity-100 visible"
              : "top-[-100%] md:top-0 opacity-0 md:opacity-100 invisible md:visible"
          } transition-all duration-300 ease-in-out`}
        >
          <NavLink
            to="/"
            className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
          >
            About Us
          </NavLink>

          {/* Solution Dropdown */}
          <div className="relative">
            <button
              className="nav-item"
              aria-expanded={isSolutionOpen}
              aria-controls="solution-submenu"
              onClick={() => {
                setIsSolutionOpen((s) => {
                  const next = !s;
                  if (next) setIsProductOpen(false);
                  return next;
                });
              }}
            >
              Solution
            </button>
            <div id="solution-submenu" className={`dropdown-menu ${isSolutionOpen ? 'open' : ''}`}>
              <Link to="/web-app" className="dropdown-item">
                Web App Development
              </Link>
              <Link to="/mobile-app" className="dropdown-item">
                Mobile App Development
              </Link>
              <Link to="/wordpres-dev" className="dropdown-item">
                Wordpres Development
              </Link>
              <Link to="/cms" className="dropdown-item">
                Content Management System
              </Link>
              <Link to="/uiux" className="dropdown-item">
                UIUX Design
              </Link>
              <Link to="/digital-marketing" className="dropdown-item">
                Digital Marketing & SEO
              </Link>
              <Link to="/patment-gateway" className="dropdown-item">
                Payment Gateway Integration
              </Link>
              <Link to="/graphic-design" className="dropdown-item">
                Graphic & Vidio Production
              </Link>
              <Link
                to="/digital-strategy-consulting"
                className="dropdown-item"
              >
                Digital Strategy Consulting
              </Link>
            </div>
          </div>

          {/* Our Product Dropdown */}
          <div className="relative">
            <button
              className="nav-item"
              aria-expanded={isProductOpen}
              aria-controls="product-submenu"
              onClick={() => {
                setIsProductOpen((s) => {
                  const next = !s;
                  if (next) setIsSolutionOpen(false);
                  return next;
                });
              }}
            >
              Our Product
            </button>
            <div id="product-submenu" className={`dropdown-menu ${isProductOpen ? 'open' : ''}`}>
              <Link to="/Edunav" className="dropdown-item">
                EduNav
              </Link>
              <Link to="/venti" className="dropdown-item">
                Venti
              </Link>
              <Link to="/latihan" className="dropdown-item">
                Latihan.id
              </Link>
              <Link to="/rajin" className="dropdown-item">
                Rajin.id
              </Link>
              <Link to="/writing-aide" className="dropdown-item">
                Writing Aide
              </Link>
              <Link to="/maridukung" className="dropdown-item">
                MariDukug.com
              </Link>
              <Link to="/jadwal-kuliah" className="dropdown-item">
                Jadwal Kuliah
              </Link>
            </div>
          </div>

          <NavLink
            to="/blog"
            className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
