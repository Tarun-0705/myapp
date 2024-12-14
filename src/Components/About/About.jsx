import React from 'react';
import './About.css'; // Import the CSS file for styles
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import logo from"../Assets/logo.jpg";
const About = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button click and navigate to /contact
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Welcome to Foodometry</h1>
        <p>Your Smart Kitchen Assistant</p>
      </header>

      <section className="about-intro">
        <div className="intro-text">
          <h2>What is Foodometry?</h2>
          <p>
            Foodometry is a revolutionary platform that helps you discover
            recipes based on the ingredients you have at home. By simply
            uploading a photo of your ingredients, our cutting-edge AI
            technology identifies them and generates a variety of recipes for
            you to try. Whether you're looking for quick meals, healthy
            options, or something more exotic, Foodometry has you covered.
          </p>
        </div>
        <div className="intro-image">
          <img src={logo} alt="Foodometry Process" />
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1: Upload Your Ingredients</h3>
            <p>Snap a photo of your ingredients and upload it to Foodometry.</p>
            <img src="ingredient-upload.jpg" alt="Upload Ingredients" />
          </div>
          <div className="step">
            <h3>Step 2: Image Recognition</h3>
            <p>Our AI analyzes the image to recognize each ingredient accurately.</p>
            <img src="ai-recognition.jpg" alt="AI Technology" />
          </div>
          <div className="step">
            <h3>Step 3: Generate Recipes</h3>
            <p>Get personalized recipes based on the ingredients you have.</p>
            <img src="generated-recipes.jpg" alt="Generated Recipes" />
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet The Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <h3>Deanne Vaz </h3>
            <p>Developer</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <h3>Tarun Chinivar</h3>
            <p>AI Specialist</p>
          </div>
          <div className="team-member">
            <img src="team-member3.jpg" alt="Team Member 3" />
            <h3>Rhiya Giridhara Bhat</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-member">
            <img src="team-member4.jpg" alt="Team Member 3" />
            <h3>Vuppu Chinmay</h3>
            <p>Developer</p>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to reach out to us!</p>
        <button className="contact-button" onClick={handleContactClick}>
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
