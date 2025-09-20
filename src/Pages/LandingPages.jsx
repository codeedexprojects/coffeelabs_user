import React from "react";
import { useNavigate } from "react-router-dom";
import "./landingpage.css";

function LandingPages() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/product');
  };

  return (
    <div className="landing-container">
      <div className="content">
        <h2>Savor the</h2>
        <h1>Perfect Brew!</h1>
        <p className="description">
          Experience the art of coffee making at its finest. Our carefully
          selected beans are roasted to perfection, ensuring every cup tells a
          story of dedication and excellence.
        </p>
        <div className="features">
          <span>✦ Premium Quality</span>
          <span>✦ Fresh Roasted</span>
          <span>✦ Artisanal Blend</span>
        </div>
        <button className="cta-button" onClick={handleExplore}>Explore Here</button>
      </div>
    </div>
  );
}

export default LandingPages;
