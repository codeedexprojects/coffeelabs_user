import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./topcategory.css";
import data from "../Assets/data.json";

function TopCategory() {
  const [categories, setCategories] = useState([]);
  const [displayedCategories, setDisplayedCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get only the first 4 categories and add descriptions
    const categoriesWithDescriptions = data.TopCategory.slice(0, 4).map(category => ({
      ...category,
      description: getCategoryDescription(category.item)
    }));
    setCategories(categoriesWithDescriptions);
  }, []);

  useEffect(() => {
    const categoriesWithDescriptions = categories.slice(0, 3).map(category => ({
      ...category,
      description: getCategoryDescription(category.name)
    }));
    setDisplayedCategories(categoriesWithDescriptions);
  }, [categories]);

  const getCategoryDescription = (categoryName) => {
    const descriptions = {
      "Coffee Macho": "Indulge in our signature blend featuring premium Arabica beans, expertly roasted for rich flavor",
      "Espresso Blend": "A perfect harmony of dark chocolate and caramel notes for your daily ritual",
      "Light Roast": "Experience the bright and vibrant notes of our carefully selected light roast",
      "Dark Roast": "Bold and intense flavors with a smooth finish, perfect for coffee enthusiasts"
    };
    return descriptions[categoryName] || "Discover our artisanal coffee selection, crafted with passion";
  };

  const handleExploreMore = () => {
    navigate('/product');
    window.scrollTo(0, 0); // Scroll to top after navigation
  };

  return (
    <div className="section-container">
      <div className="top-category-container">
        <div className="header-container">
          <div className="section-header">
            <h2 className="heading">Top Categories</h2>
            <p className="sub-text">Explore our best picks for you</p>
          </div>
          <button className="explore-more-btn" onClick={handleExploreMore}>
            Explore More
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
