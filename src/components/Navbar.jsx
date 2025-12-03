import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { logos } from "../data";
import "../css/NavbarTop.css";

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
      if (
        !menuRef.current.contains(e.target) &&
        !e.target.closest(".md:hidden")
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      // document.body.style.overflow = "hidden";
      window.addEventListener("mousedown", handleOutside);
      window.addEventListener("touchstart", handleOutside);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("mousedown", handleOutside);
      window.removeEventListener("touchstart", handleOutside);
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

  // Animated underline: show underline only for active item
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const updateUnderline = () => {
      const active = menu.querySelector(".nav-item.active");
      if (active) {
        menu.classList.add("underline-visible");
      } else {
        menu.classList.remove("underline-visible");
      }
    };

    // initial update
    const t = setTimeout(updateUnderline, 50);
    window.addEventListener("resize", updateUnderline);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", updateUnderline);
    };
  }, [location.pathname, isMenuOpen]);

  return (
    <div
      className={`navbar absoulute top-0 z-[999] py-4 px-4 md:px-16 lg:px-32 ${
        isScrolled ? "scrolled" : ""
      } ${!isHomePage ? "non-home" : ""}`}
    >
      <nav className="mx-auto flex items-center justify-between">
        <div className="logo">
          <img
            src={isHomePage && !isScrolled ? logos.whitelogo : logos.bluelogo}
            alt="Zerone Logo"
            className="w-[90px] md:w-[105px] h-[36px] md:h-[42px] object-contain"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2 overflow-x-hidden"
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
          className={`menu md:flex md:items-center md:gap-8 fixed md:static md:flex-1 md:justify-end 
              ${
                isMenuOpen
                  ? "top-20 opacity-100 w-full bg-white flex flex-col p-4 z-40 **max-h-[calc(100vh-80px)] overflow-y-auto**" // Ketika terbuka
                  : "top-[-100%] md:top-0 opacity-0 md:opacity-100" // Ketika tertutup
              } transition-all duration-300 ease-in-out`}
        >
          <NavLink
            to="/"
            className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
            onClick={() => {
              setIsMenuOpen(false);
              setIsSolutionOpen(false);
              setIsProductOpen(false);
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
            onClick={() => {
              setIsMenuOpen(false);
              setIsSolutionOpen(false);
              setIsProductOpen(false);
            }}
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
            <div
              id="solution-submenu"
              className={`dropdown-menu ${isSolutionOpen ? "open" : ""}`}
            >
              <Link
                to="/ai-app-automation-development"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                AI App & Automation Develpment
              </Link>
              <Link
                to="/web-app"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                Web App Development
              </Link>
              <Link
                to="/mobile-app"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                Mobile App Development
              </Link>
              <Link
                to="/wordpress-dev"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                Wordpres Development
              </Link>
              <Link
                to="/cms"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                Content Management System
              </Link>
              <Link
                to="/uiux"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                UIUX Design
              </Link>
              <Link
                to="/digital-marketing"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                Digital Marketing & SEO
              </Link>
              <Link
                to="/payment-gateway"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                Payment Gateway Integration
              </Link>
              <Link
                to="/graphic-design"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                Graphic & Video Production
              </Link>
              <Link
                to="/digital-strategy-consulting"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
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
            <div
              id="product-submenu"
              className={`dropdown-menu ${isProductOpen ? "open" : ""}`}
            >
              <Link
                to="/Edunav"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                EduNav
              </Link>
              <Link
                to="/venti"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                Venti
              </Link>
              <Link
                to="/latihan"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                Latihan.id
              </Link>
              <Link
                to="/rajin"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                Rajin.id
              </Link>
              <Link
                to="/writing-aide"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                Writing Aide
              </Link>
              <Link
                to="/mari-dukung"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                MariDukung.com
              </Link>
              <Link
                to="/jadwal-kuliah"
                className="dropdown-item"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSolutionOpen(false);
                  setIsProductOpen(false);
                }}
              >
                Jadwal Kuliah
              </Link>
            </div>
          </div>

          <NavLink
            to="/portfolio"
            className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
            onClick={() => {
              setIsMenuOpen(false);
              setIsSolutionOpen(false);
              setIsProductOpen(false);
            }}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
            onClick={() => {
              setIsMenuOpen(false);
              setIsSolutionOpen(false);
              setIsProductOpen(false);
            }}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-item${isActive ? " active" : ""}`}
            onClick={() => {
              setIsMenuOpen(false);
              setIsSolutionOpen(false);
              setIsProductOpen(false);
            }}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
