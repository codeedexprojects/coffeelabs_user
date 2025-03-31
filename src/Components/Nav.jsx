import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../Assets/logo.png';

function Nav() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll for About section
  const scrollToAbout = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const aboutSection = document.querySelector('.about-section');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsNavCollapsed(true); // Close mobile menu after clicking
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isNavCollapsed && !event.target.closest('.navbar-collapse') && !event.target.closest('.navbar-toggler')) {
        setIsNavCollapsed(true);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isNavCollapsed]);

  // Handle drawer close
  const handleDrawerClose = () => {
    setIsNavCollapsed(true);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top px-4 ${navbarBg ? 'bg-white shadow' : 'bg-transparent'}`}>
      <div className="container-fluid">
        {/* Logo and Brand Name */}
        <div className="navbar-brand-container">
          <img src={logo} alt="Cery Solutions" className="logo-img" />
          <span className="brand-name">COFFEE LABS</span>
        </div>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
        >
          <i className="bi bi-list text-dark"></i>
        </button>

        {/* Navigation Container with Home */}
        <div className={`collapse navbar-collapse justify-content-center ${isNavCollapsed ? '' : 'show'}`} id="navbarNav">
          {/* Mobile Close Button */}
          <button className="mobile-close" onClick={handleDrawerClose}>
            <i className="bi bi-x-lg"></i>
          </button>

          <div className="nav-wrapper">
            {/* Home Link */}
            <a className={`nav-link home-link ${location.pathname === '/' ? 'active' : ''}`} href="/">Home</a>

            {/* Main Navigation */}
            <ul className="navbar-nav nav-container">
              <li className="nav-item">
                <a
                  className={`nav-link ${location.pathname === '/' && window.scrollY > 100 ? 'active' : ''}`}
                  href="#about"
                  onClick={scrollToAbout}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} href="/blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/product' ? 'active' : ''}`} href="/product">Product</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
