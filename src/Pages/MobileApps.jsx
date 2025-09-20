import React from 'react';
import './mobileapps.css';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { IoPhonePortraitOutline } from 'react-icons/io5';

const MobileApps = () => {
    return (
        <section className="mobile-apps-section">
            <div className="mobile-apps-container">
                <div className="mobile-apps-content">
                    <div className="mobile-apps-text">
                        <h2>Download Our Mobile App</h2>
                        <p>Get the best coffee experience on your mobile device. Order, track, and enjoy exclusive offers.</p>
                        <div className="download-buttons">
                            <a href="https://apps.apple.com/app/coffee-labs" className="download-btn ios-btn">
                                <FaApple className="store-icon" />
                                <div className="btn-text">
                                    <span>Download on the</span>
                                    <strong>App Store</strong>
                                </div>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.coffeelabs" className="download-btn android-btn">
                                <FaGooglePlay className="store-icon" />
                                <div className="btn-text">
                                    <span>Get it on</span>
                                    <strong>Google Play</strong>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="mobile-apps-image">
                        <IoPhonePortraitOutline className="phone-icon" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileApps; 