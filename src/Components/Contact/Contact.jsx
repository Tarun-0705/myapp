import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (could be an API call)
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' }); // Reset the form
  };

  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! If you have any questions, feedback, or suggestions, feel free to reach out.</p>
      </header>

      <section className="contact-form-section">
        <h2>Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      <section className="social-media-section">
        <h2>Follow Us</h2>
        <p>Stay updated with the latest news, recipes, and more!</p>
        <div className="social-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
