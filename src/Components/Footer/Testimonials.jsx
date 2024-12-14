// src/components/Testimonials.jsx
import React from 'react';
import './Testimonials.css';  // Import the CSS for styling the testimonial card

const Testimonial = ({ text, author }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">"{text}"</p>
      <p className="testimonial-author">- {author}</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    { text: "Foodometry made ordering meals so easy. The website is simple to use, and I love how accurate the suggestions are!", author: "Sarah White" },
    { text: "I couldn’t believe how quickly I found exactly what I was craving! The platform is user-friendly, and everything is so precise.", author: "James Williams" },
    { text: "From start to finish, the process was seamless. I love how the website predicts exactly what I want to eat. Fast and reliable.", author: "Anna Martin" },
    { text: "Amazing service! The website is intuitive, and the meal recommendations are spot on. It's like it reads my mind!", author: "John Thompson" },
  ];

  return (
    <div className="testimonial-section">
      <h2>What Our Customers Love About Foodometry</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            text={testimonial.text}
            author={testimonial.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
