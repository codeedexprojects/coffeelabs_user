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
          <p>The premier destination for coffee labs for all the needs of cafes, restaurants, and hotels. We specialize in catering to cafes, restaurants, and hotels, providing a wide range of materials, equipment, and accessories to ensure the best customer experience. From providing specialized consultations to training the work team and fully equipping the site, we are here to be your trusted partner for achieving success and excellence.</p>
        </div>

        {/* Vision & Mission */}
        <div className="about-grid">
          <div className="about-card vision">
            <div className="card-content">
              <div className="card-icon">
                <FaChartLine />
              </div>
              <h3>Our Vision</h3>
              <p>Our vision is to become the ideal partner for every cafe, restaurant, and hotel seeking quality and excellence in serving coffee and related services. We support the goals of Saudi Vision 2030 by promoting innovation and sustainability in the coffee industry and developing the hospitality sector according to the highest international standards.</p>
            </div>
          </div>

          <div className="about-card mission">
            <div className="card-content">
              <div className="card-icon">
                <FaCoffee />
              </div>
              <h3>Our Mission</h3>
              <p>We strive to provide high-quality products and exceptional services that contribute to enhancing the customer experience and achieving their complete satisfaction.</p>
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
              <p>We are committed to providing products and services of unparalleled quality to ensure our customers' satisfaction.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaChartLine />
              </div>
              <h4>Innovation</h4>
              <p>We always strive to innovate and provide modern and distinguished solutions in the coffee industry.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaHandshake />
              </div>
              <h4>Reliability</h4>
              <p>We build long-term relationships with our customers by providing reliable services and continuous support.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <FaCoffee />
              </div>
              <h4>Commitment</h4>
              <p>We are committed to meeting our customers' needs and working passionately to achieve their goals.</p>
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
              <span>Catering for cafes, restaurants, and hotels</span>
            </div>
            <div className="service-item">
              <BiSolidCoffeeBean className="service-icon" />
              <span>Specialized consulting</span>
            </div>
            <div className="service-item">
              <BiSolidCoffeeBean className="service-icon" />
              <span>Training and supervision</span>
            </div>
            <div className="service-item">
              <BiSolidCoffeeBean className="service-icon" />
              <span>Full equipment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 