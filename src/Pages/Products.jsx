import React, { useState, useEffect } from 'react';
import './products.css';
import { FaSearch } from 'react-icons/fa';
import productsData from '../Assets/products.json';
import WhatsAppButton from '../Components/WhatsAppButton';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productsPerPage = 12;

  // Get all categories from the products data
  const categories = [
    { id: 'all', name: 'View All' },
    ...productsData.Products.map(category => ({
      id: category.category,
      name: category.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }))
  ];

  // Filter products based on category and search
  useEffect(() => {
    let allProducts = [];

    // Get all products from all categories
    productsData.Products.forEach(category => {
      if (activeCategory === 'all' || activeCategory === category.category) {
        const productsWithCategory = category.items.map(item => ({
          ...item,
          category: category.category
        }));
        allProducts = [...allProducts, ...productsWithCategory];
      }
    });

    // Shuffle products if viewing all categories
    if (activeCategory === 'all') {
      allProducts = shuffleArray(allProducts);
    }

    // Apply search filter
    if (searchQuery) {
      allProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(allProducts);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory, searchQuery]);

  // Shuffle array function
  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pageNumbers = [];
    const isMobile = window.innerWidth <= 768;

    if (totalPages <= 5 || isMobile) {
      // If total pages is 5 or less, or on mobile, show simplified pagination
      if (currentPage <= 3) {
        // At the start
        for (let i = 1; i <= Math.min(3, totalPages); i++) {
          pageNumbers.push(i);
        }
        if (totalPages > 3) {
          if (totalPages > 4) pageNumbers.push('...');
          pageNumbers.push(totalPages);
        }
      } else if (currentPage >= totalPages - 2) {
        // At the end
        pageNumbers.push(1);
        if (totalPages > 4) pageNumbers.push('...');
        for (let i = Math.max(totalPages - 2, 2); i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // In the middle
        pageNumbers.push(1);
        pageNumbers.push('...');
        pageNumbers.push(currentPage);
        if (currentPage < totalPages - 1) pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    } else {
      // Desktop view with more than 5 pages
      pageNumbers.push(1);
      if (currentPage > 3) {
        pageNumbers.push('...');
      }
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, totalPages - 1); i++) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 2) {
        pageNumbers.push('...');
      }
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber !== '...') {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="products-section">
      <div className="products-container">
        <div className="section-title">
          <h2>Our Product Collection</h2>
          <p>Explore our premium selection of coffee products and accessories</p>
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
          {categories.map(category => (
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
                  src={product.image}
                  alt={product.title}
                  onError={(e) => {
                    e.target.src = '/Assets/Products/1.png';
                  }}
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-excerpt">{product.description}</p>
                <div className="product-footer">
                  <div className="price-stock">
                    <div className="product-price">${product.price.toFixed(2)}</div>
                    <div className="stock-status">
                      <span className="dot"></span>In Stock
                    </div>
                  </div>
                  <div className="product-actions">
                    <WhatsAppButton productName={product.title} className="buy-now-btn" />
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
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {getPageNumbers().map((number, index) => (
              <button
                key={index}
                className={`page-btn ${currentPage === number ? 'active' : ''} ${number === '...' ? 'ellipsis' : ''}`}
                onClick={() => handlePageChange(number)}
                disabled={number === '...'}
              >
                {number}
              </button>
            ))}
            <button
              className="page-btn"
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
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
