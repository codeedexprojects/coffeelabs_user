import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./topcategory.css";
// Import images directly
import coffeePowdersImg from "../Assets/coffee_powders.jpeg";
import coffeeMachineImg from "../Assets/coffee- Machine.jpeg";
import syrupsImg from "../Assets/syrups.jpeg";
import otherItemsImg from "../Assets/other.jpeg";

function TopCategory() {
  const [displayedCategories, setDisplayedCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Create categories with proper image paths
    const categoriesWithImages = [
      {
        id: 1,
        item: "Coffee Powders",
        image: coffeePowdersImg,
        description: "Premium wholesale coffee powders and blends for cafes, restaurants, and businesses"
      },
      {
        id: 2,
        item: "Commercial Machines",
        image: coffeeMachineImg,
        description: "Professional-grade coffee machines and equipment for high-volume operations"
      },
      {
        id: 3,
        item: "Syrups",
        image: syrupsImg,
        description: "Bulk flavoring syrups and additives for coffee shops and food service businesses"
      },
      {
        id: 4,
        item: "Other Items",
        image: otherItemsImg,
        description: "Bulk coffee carriers, cups, and packaging supplies for your business needs"
      }
    ];

    setDisplayedCategories(categoriesWithImages);
  }, []);

  const handleExploreMore = () => {
    navigate('/product');
    window.scrollTo(0, 0); // Scroll to top after navigation
  };

  return (
    <div className="section-container">
      <div className="top-category-container">
        <div className="header-container">
          <div className="section-header">
            <h2 className="heading">Top Sale Categories</h2>
            <p className="sub-text">Premium coffee supplies for your business</p>
          </div>
          <button className="explore-more-btn" onClick={handleExploreMore}>
            View Catalog
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="categories-grid">
          {displayedCategories.map((category, index) => (
            <div key={index} className="category-card">
              <img
                src={category.image}
                alt={category.item}
                className="category-image"
              />
              <div className="category-content">
                <h3 className="category-name">{category.item}</h3>
                <p className="category-description">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopCategory;
