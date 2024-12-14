import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import About from './Components/About/About';  
import Header from './Components/Header/Header';  
import Footer from './Components/Footer/Footer';  
import {LoginSignup} from './Pages/LoginSignup/LoginSignup'
import Privacy from './Components/Privacy/Privacy';  // Import the Privacy component
import Terms from './Components/Terms/Terms';  // Import the Terms component
import Contact from './Components/Contact/Contact';  // Import the Contact component

const App = () => {
  return (
    <Router>
      <Header />  {/* Header will be shown on all pages */}
      <Routes>
        <Route path="/" element={<LoginSignup />} /> {/* Default route for login/signup */}
        <Route path="/about" element={<About />} /> {/* About page route */}
        <Route path="/privacy" element={<Privacy />} /> {/* Privacy page route */}
        <Route path="/terms" element={<Terms />} /> {/* Terms page route */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
      </Routes>
      <Footer />  {/* Footer will be shown on all pages */}
    </Router>
  );
};

export default App;
