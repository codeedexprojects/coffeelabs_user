import React, { useState } from 'react';
import './contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-wrapper">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          We're here to help! Whether you have a question about our coffee, want to place an order,
          or just want to say hello, we'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Info Cards */}
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="icon-wrapper">
              <FaPhone className="contact-icon" />
            </div>
            <h4>Call Us</h4>
            <p>+966 050 909 1032</p>
            <span>Sun-Thu from 9am to 6pm</span>
          </div>
          <div className="contact-info-card">
            <div className="icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <h4>Email Us</h4>
            <p>coffeelabs@gmail.com</p>
            <span>We'll respond within 24 hours</span>
          </div>
          <div className="contact-info-card">
            <div className="icon-wrapper">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <h4>Visit Us</h4>
            <p>Jeddah,Tabuk,Saudi Arabia</p>
            <span>Open daily 9am - 10pm</span>
          </div>
        </div>

        {/* Contact Form and Map Container */}
        <div className="contact-form-map-container">
          {/* Contact Form */}
          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  placeholder="How can we help you?"
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : submitSuccess ? (
                  'Message Sent!'
                ) : (
                  <>
                    <FaPaperPlane style={{ marginRight: '8px' }} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.4449999999997!2d39.1977!3d21.5433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0x9e3a9b3c3c3c3c3c!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee Labs Locations in Saudi Arabia"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;