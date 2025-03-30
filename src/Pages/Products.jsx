import React, { useState, useEffect } from 'react';
import './products.css';
import { FaSearch } from 'react-icons/fa';
import productsData from '../Assets/products.json';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productsPerPage = 12;

  // Default image for products
  const defaultImage = '/Assets/Products/1.png';

  // Handle image error
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  // Get image path based on category
  const getImagePath = (product) => {
    const basePath = '/Assets/Products/';
    if (product.id <= 7) {
      return `${basePath}${product.id}.png`;
    }
    return `${basePath}${product.category}/${product.id}.png`;
  };

  // Filter products based on category and search
  useEffect(() => {
    let filtered = productsData.Products;

    // Apply category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [activeCategory, searchQuery]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="products-section">
      <div className="products-container">
        <div className="section-title">
          <h2>Our Product Collection</h2>
          <p>Explore our premium selection of spreads, coffee, and accessories</p>
        </div>

        <div className="search-filter-bar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search our products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="product-categories">
          <button
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <span>View All</span>
          </button>
          {productsData.Categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="products-grid">
          {currentProducts.map(product => (
            <article key={product.id} className="product-card">
              <div className="product-image">
                <img
                  src={getImagePath(product)}
                  alt={product.title}
                  onError={handleImageError}
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-excerpt">{product.description}</p>
                <div className="product-footer">
                  <div className="price-stock">
                    <div className="product-price">${product.price.toFixed(2)}</div>
                    <div className="stock-status in-stock">
                      <span className="dot"></span>In Stock
                    </div>
                  </div>
                  <div className="product-actions">
                    <button className="quick-view-btn" title="Quick View">
                      <span>👁️</span>
                    </button>
                    <button className="buy-now-btn">
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="page-btn"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {pageNumbers.map(number => (
              <button
                key={number}
                className={`page-btn ${currentPage === number ? 'active' : ''}`}
                onClick={() => setCurrentPage(number)}
              >
                {number}
              </button>
            ))}
            <button
              className="page-btn"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
