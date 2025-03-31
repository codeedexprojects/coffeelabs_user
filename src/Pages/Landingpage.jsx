import React from 'react';
import './landingpage.css';

function Landingpage() {
  return (
    <div className="landing-container">
      <div className="content">
        <h2>Savor the</h2>
        <h1>Perfect Brew!</h1>
        <p className="description">Experience the art of coffee making at its finest. Our carefully selected beans are roasted to perfection, ensuring every cup tells a story of dedication and excellence.</p>
        <div className="features">
          <span>✦ Premium Quality</span>
          <span>✦ Fresh Roasted</span>
          <span>✦ Artisanal Blend</span>
        </div>
        <button className="cta-button">Explore Our Coffee</button>
      </div>
    </div>
  );
}

export default Landingpage;
