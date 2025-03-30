import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <section className="hero-section">
                <img
                    src="/images/hero-bg.jpg"
                    alt="Coffee Background"
                    className="hero-background"
                />
                <div className="hero-content">
                    <div className="hero-text-container">
                        <h3 className="hero-tagline">Welcome to Mr Brew</h3>
                        <h2 className="hero-subtitle">Freshly Roasted</h2>
                        <h1 className="hero-title">COFFEE</h1>
                        <div className="hero-description">
                            <p className="main-description">
                                Experience the perfect blend of artisanal coffee, carefully sourced and
                                roasted to perfection. Each cup tells a story of dedication to quality
                                and passion for exceptional taste.
                            </p>
                            <p className="sub-description">
                                From farm to cup, we ensure every bean meets our premium standards.
                                Discover rich flavors, aromatic blends, and the true essence of
                                specialty coffee crafted just for you.
                            </p>
                            <div className="hero-features">
                                <span>✦ Premium Quality</span>
                                <span>✦ Ethically Sourced</span>
                                <span>✦ Fresh Roasted Daily</span>
                            </div>
                        </div>
                        <button
                            className="shop-now-btn"
                            onClick={() => navigate('/products')}
                        >
                            <span>Shop Now</span>
                        </button>
                    </div>
                </div>

                <div className="floating-elements">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={`bean-${index}`}
                            className="coffee-bean"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${index * 2}s`
                            }}
                        />
                    ))}
                    {[...Array(3)].map((_, index) => (
                        <div
                            key={`steam-${index}`}
                            className="steam"
                            style={{
                                top: '60%',
                                left: `${50 + (index - 1) * 10}%`,
                                animationDelay: `${index * 0.5}s`
                            }}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home; 