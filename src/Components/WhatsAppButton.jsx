import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = ({ productName = 'product', className = '' }) => {
  const phoneNumber = '+966509091032';
  const message = `Hello! I'm interested in buying the following product from your website:

🔹 Product: ${productName}

Could you please provide more details about:
• Availability
• Pricing
• Delivery options

Thank you!`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`whatsapp-button ${className}`}
    >
      <i className="fab fa-whatsapp"></i> Buy Now
    </a>
  );
};

export default WhatsAppButton;
