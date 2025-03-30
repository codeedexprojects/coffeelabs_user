import React, { useState } from 'react';
import './blogs.css';

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Perfect French Press Coffee Guide',
      excerpt: 'Master the art of French Press brewing with our comprehensive guide. Learn the perfect coffee-to-water ratio, ideal grind size, and step-by-step brewing technique for a rich, full-bodied cup every time.',
      image: require('../Assets/partners/barns.jpg'),
      category: 'Brewing Tips',
      date: '5 MIN READ',
    },
    {
      id: 2,
      title: 'Ethiopian Yirgacheffe: A Journey to Origin',
      excerpt: 'Discover the story behind our Ethiopian Yirgacheffe beans. From the misty highlands of Ethiopia to your cup, learn about the farmers, the region, and what makes these beans so special.',
      image: require('../Assets/partners/barns.jpg'),
      category: 'Coffee Origins',
      date: '7 MIN READ',
    },
    {
      id: 3,
      title: 'Iced Caramel Macchiato Recipe',
      excerpt: "Beat the heat with our signature Iced Caramel Macchiato recipe. We share our barista's secrets for the perfect balance of espresso, milk, vanilla, and caramel drizzle.",
      image: require('../Assets/partners/barns.jpg'),
      category: 'Coffee Recipes',
      date: '4 MIN READ',
    },
    {
      id: 4,
      title: 'Coffee and Mental Focus: The Science',
      excerpt: "Explore the scientific research behind coffee's ability to enhance mental focus and productivity. Learn about optimal consumption timing and how coffee affects your brain.",
      image: require('../Assets/partners/barns.jpg'),
      category: 'Health Benefits',
      date: '6 MIN READ',
    },
    {
      id: 5,
      title: "Meet Our Master Roaster: Sarah's Story",
      excerpt: 'Go behind the scenes with our master roaster Sarah. Learn about her 15-year journey in coffee roasting, her philosophy, and how she creates our signature blends.',
      image: require('../Assets/partners/barns.jpg'),
      category: 'Behind-the-Scenes',
      date: '8 MIN READ',
    },
    {
      id: 6,
      title: 'New: Single-Origin Pour-Over Bar',
      excerpt: "Introducing our new pour-over bar featuring rotating single-origin coffees. Each week, experience a new carefully selected bean from the world's finest coffee regions.",
      image: require('../Assets/partners/barns.jpg'),
      category: 'Shop Updates',
      date: '3 MIN READ',
    }
  ];

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section className="blogs-section">
      <div className="blogs-container">
        <div className="section-title">
          <h2>Coffee Stories & Insights</h2>
          <p>Explore our world of coffee through expert guides, recipes, and stories</p>
        </div>

        <div className="blog-categories">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blogs-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-meta">{post.date}</span>
                  <a href="#" className="read-more">
                    <span>Read Article</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
