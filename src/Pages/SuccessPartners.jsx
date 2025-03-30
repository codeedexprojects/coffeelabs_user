import React, { useEffect, useRef } from 'react';
import './successpartners.css';
import { FaArrowRight } from 'react-icons/fa';

const SuccessPartners = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

        const partnerCards = document.querySelectorAll('.partner-card');
        partnerCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const partners = [
        {
            id: 1,
            name: 'Barns',
            logo: require('../Assets/partners/barns.jpg')
        },
        {
            id: 2,
            name: 'DeLonghi',
            logo: require('../Assets/partners/delonghi.png')
        },
        {
            id: 3,
            name: 'Nescafe',
            logo: require('../Assets/partners/nescafe.png')
        },
        {
            id: 4,
            name: 'Giffard',
            logo: require('../Assets/partners/liqueurs & sirops giffard .png')
        },
        {
            id: 5,
            name: 'Torani',
            logo: require('../Assets/partners/torani.png')
        },
        {
            id: 6,
            name: 'Kimbo',
            logo: require('../Assets/partners/kimbo.webp')
        },
        {
            id: 7,
            name: 'Black Knight',
            logo: require('../Assets/partners/black-knight.png')
        },
        {
            id: 8,
            name: 'Soil',
            logo: require('../Assets/partners/soil.png')
        },
        {
            id: 9,
            name: 'Kiffa',
            logo: require('../Assets/partners/kiffa.jpeg')
        },
        {
            id: 10,
            name: 'La Cimbali',
            logo: require('../Assets/partners/lacimbali.png')
        },
        {
            id: 11,
            name: 'Intenso',
            logo: require('../Assets/partners/intenso-logo1.jpg')
        },
        {
            id: 12,
            name: 'Suwaa',
            logo: require('../Assets/partners/suwaa.jpeg')
        },
        {
            id: 13,
            name: 'Herco Foods',
            logo: require('../Assets/partners/herco-foods.webp')
        },
        {
            id: 14,
            name: 'Hario',
            logo: require('../Assets/partners/hario.webp')
        },
        {
            id: 15,
            name: 'Illy',
            logo: require('../Assets/partners/Illy.png')
        },
        {
            id: 16,
            name: 'Big Train',
            logo: require('../Assets/partners/big-train.png')
        },
        {
            id: 17,
            name: 'Ovvio',
            logo: require('../Assets/partners/ovvio.jpeg')
        },
        {
            id: 18,
            name: 'Hills Bros',
            logo: require('../Assets/partners/hill-bros.jpeg')
        },
        {
            id: 19,
            name: 'Bunn',
            logo: require('../Assets/partners/bunn.png')
        },
        {
            id: 20,
            name: 'Caffe Diemme',
            logo: require('../Assets/partners/coffe-diemme.png')
        },
        {
            id: 21,
            name: 'Nutella',
            logo: require('../Assets/partners/nutella.png')
        },
        {
            id: 22,
            name: 'DaVinci',
            logo: require('../Assets/partners/DaVinci-Banner.png')
        },
        {
            id: 23,
            name: 'Twinings',
            logo: require('../Assets/partners/twinings-of-london.png')
        },
        {
            id: 24,
            name: 'Lavazza',
            logo: require('../Assets/partners/lavazza.png')
        },
        {
            id: 25,
            name: 'Molinari',
            logo: require('../Assets/partners/caffe-molinari.webp')
        },
        {
            id: 26,
            name: 'Monin',
            logo: require('../Assets/partners/monin.png')
        },
        {
            id: 27,
            name: 'Aiello',
            logo: require('../Assets/partners/aiello.png')
        },
        {
            id: 28,
            name: 'Mocafe',
            logo: require('../Assets/partners/mocafe_Logo.jpg')
        }
    ];

    return (
        <section className="partners-section" ref={sectionRef}>
            <div className="partners-container">
                <div className="partners-header">
                    <h2 className="partners-title">Our Partners</h2>
                    <div className="partners-subtitle">Trusted by the world's best coffee brands</div>
                </div>

                <div className="partners-grid">
                    {partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="partner-card"
                            title={partner.name}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="partner-logo"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessPartners; 