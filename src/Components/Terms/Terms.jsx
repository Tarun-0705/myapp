import React from 'react';
import './Terms.css';

const TermsOfService = () => {
  return (
    <div className="terms-of-service-container">
      <header className="terms-of-service-header">
        <h1>Terms of Service</h1>
        <p>Effective Date: [Insert Date]</p>
      </header>

      <section className="terms-of-service-section">
        <h2>Introduction</h2>
        <p>
          Welcome to Foodometry! These Terms of Service ("Terms") govern your use of our website and services. By using our website, you agree to comply with these Terms and all applicable laws.
        </p>
      </section>

      <section className="terms-of-service-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Foodometry, you agree to be bound by these Terms, our Privacy Policy, and any other applicable policies. If you do not agree with these Terms, please do not use our website.
        </p>
      </section>

      <section className="terms-of-service-section">
        <h2>2. Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms at any time. Any changes will be posted on this page with an updated effective date. It is your responsibility to review these Terms periodically.
        </p>
      </section>

      <section className="terms-of-service-section">
        <h2>3. User Responsibilities</h2>
        <p>
          As a user of Foodometry, you agree to the following:
          <ul>
            <li>Provide accurate and up-to-date information when creating an account.</li>
            <li>Maintain the confidentiality of your login credentials.</li>
            <li>Use the website for lawful purposes only.</li>
            <li>Not engage in any activity that could harm the website or its users.</li>
            <li>Not upload or distribute any harmful, offensive, or unlawful content.</li>
          </ul>
        </p>
      </section>

      <section className="terms-of-service-section">
        <h2>4. Content Ownership</h2>
        <p>
          All content on Foodometry, including text, images, logos, and software, is the property of Foodometry or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the website and services for personal, non-commercial purposes.
        </p>
      </section>

      <section className="terms-of-service-section">
        <h2>5. Limitations of Liability</h2>
        <p>
          Foodometry is not responsible for any direct, indirect, incidental, or consequential damages that arise from the use of or inability to use the website, including but not limited to errors in the content, delays, or data loss. We make no warranties regarding the accuracy, reliability, or completeness of the website.
        </p>
      </section>

      <section className="terms-of-service-section">
        <h2>6. Governing Law</h2>
        <p>
          These Terms will be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles. Any disputes will be resolved in the appropriate courts of [Your Jurisdiction].
        </p>
      </section>

      <section className="terms-of-service-section">
        <h2>7. Contact Information</h2>
        <p>
          If you have any questions or concerns about these Terms, please contact us at:
          <br />
          <strong>Email:</strong> support@foodometry.com
          <br />
          <strong>Phone:</strong> +123 456 7890
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
