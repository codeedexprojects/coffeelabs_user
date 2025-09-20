import React from 'react';
import './customerreviews.css';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const CustomerReviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Ahmed Al-Saud",
            role: "Cafe Owner",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            comment: "Coffee Labs provided exceptional service and high-quality equipment. Their team's expertise helped us set up our cafe perfectly."
        },
        {
            id: 2,
            name: "Sarah Mohammed",
            role: "Restaurant Manager",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 5,
            comment: "The coffee machines and training provided by Coffee Labs have significantly improved our service quality and customer satisfaction."
        },
        {
            id: 3,
            name: "Khalid Hassan",
            role: "Hotel Director",
            image: "https://randomuser.me/api/portraits/men/67.jpg",
            rating: 5,
            comment: "Professional team, excellent products, and outstanding after-sales support. Highly recommended for any hospitality business."
        }
    ];

    return (
        <section className="reviews-section">
            <div className="reviews-container">
                <div className="section-header">
                    <h2>What Our Customers Say</h2>
                    <p>Hear from our satisfied clients about their experience with Coffee Labs</p>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <div className="review-header">
                                <div className="customer-image">
                                    <img src={review.image} alt={review.name} />
                                </div>
                                <div className="customer-info">
                                    <h4>{review.name}</h4>
                                    <p>{review.role}</p>
                                </div>
                            </div>
                            <div className="review-content">
                                <FaQuoteLeft className="quote-icon" />
                                <p>{review.comment}</p>
                            </div>
                            <div className="review-rating">
                                {[...Array(review.rating)].map((_, index) => (
                                    <FaStar key={index} className="star-icon" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews; 