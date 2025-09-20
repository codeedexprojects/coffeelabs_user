import React from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-description">
            Coffee Labs is your premium coffee destination, offering the finest selection of artisanal coffee and brewing equipment.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF size={16} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaXTwitter size={16} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/product">Products</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={16} />
              <p>Jeddah-Al-Safa District-Umm Al-Qura Street</p>
            </div>
            <div className="contact-item">
              <Phone size={16} />
              <p>+966 05 09 091 032</p>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <p>coffeelabs@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Newsletter</h3>
          <p className="footer-description">Subscribe to our newsletter for updates and exclusive offers.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit" className="subscribe-btn">
              Subscribe
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Coffee Labs. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
