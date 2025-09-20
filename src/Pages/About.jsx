import React from 'react';
import './about.css';
import { FaCoffee, FaChartLine, FaHandshake, FaHeart } from 'react-icons/fa';
import { BiSolidCoffeeBean } from 'react-icons/bi';

function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        {/* Main Introduction */}
        <div className="about-intro">
          <div className="intro-icon">
            <BiSolidCoffeeBean />
          </div>
          <h2>Welcome to Coffee Labs</h2>
          <div className="underline"></div>
          <p>The premier wholesale supplier of coffee equipment, materials, and accessories for cafes, restaurants, and hotels in Saudi Arabia. We offer a comprehensive range of products including professional coffee machines, premium coffee beans, tea powders, milk products, and all essential supplies needed for a successful beverage service operation. Our extensive catalog ensures you'll find everything you need for your business in one place.</p>
        </div>

        {/* Vision & Mission */}
        <div className="about-grid">
          <div className="about-card vision">
            <div className="card-content">
              <div className="card-icon">
                <FaChartLine />
              </div>
              <h3>Our Vision</h3>
              <p>To be Saudi Arabia's leading wholesale supplier of coffee equipment and materials, providing businesses with quality products at competitive prices. We align with Saudi Vision 2030 by fostering growth in the hospitality sector through reliable product supply and sustainable business practices.</p>
            </div>
          </div>

          <div className="about-card mission">
            <div className="card-content">
              <div className="card-icon">
                <FaCoffee />
              </div>
              <h3>Our Mission</h3>
              <p>To provide premium quality coffee equipment, materials, and supplies that enable our business partners to deliver exceptional beverage experiences to their customers. We are committed to being your one-stop wholesale supplier for all coffee-related products.</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="values-section">
          <h3>Our Values</h3>
          <div className="underline center"></div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">
                <FaHeart />
              </div>
              <h4>Quality</h4>
              <p>We source and distribute only the finest equipment and materials from trusted international brands.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaChartLine />
              </div>
              <h4>Innovation</h4>
              <p>We continuously update our product catalog with the latest coffee industry equipment and supplies.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h4>Reliability</h4>
              <p>We maintain strong relationships with our partners through consistent supply chain management and timely delivery.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaCoffee />
              </div>
              <h4>Commitment</h4>
              <p>We are dedicated to providing the best products at competitive wholesale prices.</p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="services-section">
          <h3>Our Services</h3>
          <div className="underline center"></div>
          <div className="services-grid">
            <div className="service-item">
              <BiSolidCoffeeBean className="service-icon" />
              <span>Coffee Machines & Equipment Supply</span>
            </div>
            <div className="service-item">
              <BiSolidCoffeeBean className="service-icon" />
              <span>Coffee Beans & Tea Products</span>
            </div>
            <div className="service-item">
              <BiSolidCoffeeBean className="service-icon" />
              <span>Milk & Beverage Supplies</span>
            </div>
            <div className="service-item">
              <BiSolidCoffeeBean className="service-icon" />
              <span>Accessories & Spare Parts</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 