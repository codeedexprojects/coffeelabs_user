import React, { useEffect, useRef } from 'react';
import './statistics.css';

const Statistics = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const stats = [
        {
            number: "500+",
            text: "Business Partners"
        },
        {
            number: "1000+",
            text: "Products Available"
        },
        {
            number: "15+",
            text: "Years Experience"
        },
        {
            number: "50+",
            text: "Brands Distributed"
        }
    ];

    return (
        <section className="statistics-section" ref={sectionRef}>
            <div className="statistics-container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <h3 className="stat-number">{stat.number}</h3>
                            <p className="stat-text">{stat.text}</p>
                            {index < stats.length - 1 && <span className="divider">|</span>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics; 