import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { logos } from "../data"; // Pastikan path ini benar
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../css/V2-Navbar.css"
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State untuk Dropdown Desktop
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  // State untuk Dropdown Mobile (Accordion)
  const [mobileSolutionOpen, setMobileSolutionOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  const location = useLocation();

  // Efek Scroll untuk mengubah background navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup menu saat pindah halaman
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSolutionOpen(false);
    setIsProductOpen(false);
    setMobileSolutionOpen(false);
    setMobileProductOpen(false);
  }, [location]);

  // Helper class untuk NavLink active state
  const getNavLinkClass = ({ isActive }) => 
    isActive ? "nav-link active" : "nav-link";

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          
          {/* LOGO */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <img src={logos.bluelogo} alt="Logo" />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="nav-links">
            <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
            <NavLink to="/about" className={getNavLinkClass}>About Us</NavLink>

            {/* Dropdown Solution */}
            <div 
              className="dropdown-wrapper"
              onMouseEnter={() => setIsSolutionOpen(true)}
              onMouseLeave={() => setIsSolutionOpen(false)}
            >
              <span className={`nav-link ${isSolutionOpen ? 'active' : ''}`} style={{cursor: 'pointer'}}>
                Solution <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px', marginLeft: '5px'}}/>
              </span>
              <div className={`dropdown-menu ${isSolutionOpen ? "show" : ""}`}>
                <Link to="/ai-app-automation-development" className="dropdown-item">AI App & Automation</Link>
                <Link to="/web-app" className="dropdown-item">Web App Development</Link>
                <Link to="/mobile-app" className="dropdown-item">Mobile App Development</Link>
                <Link to="/wordpress-dev" className="dropdown-item">Wordpress Development</Link>
                <Link to="/cms" className="dropdown-item">Content Management System</Link>
                <Link to="/uiux" className="dropdown-item">UI/UX Design</Link>
                <Link to="/digital-marketing" className="dropdown-item">Digital Marketing & SEO</Link>
                <Link to="/payment-gateway" className="dropdown-item">Payment Gateway</Link>
                <Link to="/graphic-design" className="dropdown-item">Graphic Design</Link>
                <Link to="/digital-strategy-consulting" className="dropdown-item">Strategy Consulting</Link>
              </div>
            </div>

            {/* Dropdown Product */}
            <div 
              className="dropdown-wrapper"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              <span className={`nav-link ${isProductOpen ? 'active' : ''}`} style={{cursor: 'pointer'}}>
                Our Product <FontAwesomeIcon icon={faChevronDown} style={{fontSize: '12px', marginLeft: '5px'}}/>
              </span>
              <div className={`dropdown-menu ${isProductOpen ? "show" : ""}`}>
                <Link to="/Edunav" className="dropdown-item">EduNav</Link>
                <Link to="/venti" className="dropdown-item">Venti</Link>
                <Link to="/latihan" className="dropdown-item">Latihan.id</Link>
                <Link to="/rajin" className="dropdown-item">Rajin.id</Link>
                <Link to="/writing-aide" className="dropdown-item">Writing Aide</Link>
                <Link to="/mari-dukung" className="dropdown-item">MariDukung.com</Link>
                <Link to="/jadwal-kuliah" className="dropdown-item">Jadwal Kuliah</Link>
              </div>
            </div>

            <NavLink to="/portfolio" className={getNavLinkClass}>Portfolio</NavLink>
            <NavLink to="/blog" className={getNavLinkClass}>Blog</NavLink>
            <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
          </div>

          {/* CTA & HAMBURGER */}
          <div style={{ display: 'flex', alignItems: 'right', gap: '1rem' }}>
        

            <button
              className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-content">
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
             ✕
          </button>

          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <NavLink to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
            </li>

            {/* Mobile Dropdown Solution */}
            <li className="mobile-nav-item">
              <span 
                className="mobile-nav-link" 
                onClick={() => setMobileSolutionOpen(!mobileSolutionOpen)}
                style={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}
              >
                Solution <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em', transform: mobileSolutionOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s'}}/>
              </span>
              
              {/* Submenu Mobile */}
              <div style={{ 
                height: mobileSolutionOpen ? 'auto' : '0', 
                overflow: 'hidden', 
                transition: 'height 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: mobileSolutionOpen ? '15px' : '0'
              }}>
                 <Link to="/web-app" className="mobile-sublink" onClick={() => setIsMenuOpen(false)}>Web App Dev</Link>
                 <Link to="/mobile-app" className="mobile-sublink" onClick={() => setIsMenuOpen(false)}>Mobile App Dev</Link>
                 {/* Tambahkan link lainnya sesuai kebutuhan */}
              </div>
            </li>

             {/* Mobile Dropdown Product */}
             <li className="mobile-nav-item">
              <span 
                className="mobile-nav-link" 
                onClick={() => setMobileProductOpen(!mobileProductOpen)}
                style={{cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}
              >
                Products <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '0.8em', transform: mobileProductOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s'}}/>
              </span>
              
              <div style={{ 
                height: mobileProductOpen ? 'auto' : '0', 
                overflow: 'hidden', 
                transition: 'height 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginTop: mobileProductOpen ? '15px' : '0'
              }}>
                 <Link to="/Edunav" className="mobile-sublink" onClick={() => setIsMenuOpen(false)}>EduNav</Link>
                 <Link to="/venti" className="mobile-sublink" onClick={() => setIsMenuOpen(false)}>Venti</Link>
              </div>
            </li>

            <li className="mobile-nav-item">
              <NavLink to="/portfolio" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Portfolio</NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/blog" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}