import React, { useState } from 'react';
import './LoginSignup.css';
import { motion } from 'framer-motion';


import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import pass_icon from '../Assets/password.png';

// Meteor Component
const Meteor = () => {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="meteor"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </>
  );
};

export const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');  // Clear login state
    window.location.href = '/login';  // Redirect to login page
  };

  return (
    <div className="container">
      {/* Meteor Animation */}
      <Meteor />
      
      <motion.div
        className="header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text">{action}</div>
        <motion.div
          className="underline"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      
      <motion.div
        className="inputs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {action === "Login" ? null : (
          <motion.div
            className="input"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </motion.div>
        )}
        
        <motion.div
          className="input"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email-id" />
        </motion.div>

        <motion.div
          className="input"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <img src={pass_icon} alt="" />
          <input type="password" placeholder="Password" />
        </motion.div>

        {action === "Login" ? null : (
          <motion.div
            className="input"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <img src={pass_icon} alt="" />
            <input type="password" placeholder="Confirm Password" />
          </motion.div>
        )}
      </motion.div>

      {action === "Sign up" ? null : (
        <motion.div
          className="forgot-password"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Forgot Password? <span>Click Here!!</span>
        </motion.div>
      )}

      <motion.div
        className="submit-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </motion.div>

      {/* If logged in, show logout button */}
      {isLoggedIn && (
        <motion.div
          className="logout"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="submit" onClick={handleLogout}>
            Logout
          </div>
        </motion.div>
      )}
       
    </div>
  );
};
