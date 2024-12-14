import React from 'react';
import './Privacy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <header className="privacy-policy-header">
        <h1>Privacy Policy</h1>
        <p>Effective Date: [Insert Date]</p>
      </header>

      <section className="privacy-policy-section">
        <h2>Introduction</h2>
        <p>
          Welcome to Foodometry! We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>1. Data Collection</h2>
        <p>
          We collect data in the following ways:
          <ul>
            <li><strong>Personal Information:</strong> When you sign up, log in, or contact us, we may collect your name, email address, phone number, and any other information you voluntarily provide.</li>
            <li><strong>Usage Data:</strong> We collect data about your interactions with our website, such as your browsing behavior, device information, and location data.</li>
            <li><strong>Cookies:</strong> We use cookies to enhance your experience. Cookies help us analyze website traffic and personalize your visit.</li>
          </ul>
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>2. Data Usage</h2>
        <p>
          We use your data for the following purposes:
          <ul>
            <li><strong>To Provide Services:</strong> We use your data to offer personalized experiences, such as generating recipes and recommending ingredients.</li>
            <li><strong>To Improve Our Website:</strong> Your data helps us improve our services and optimize user experience.</li>
            <li><strong>For Communication:</strong> We may contact you regarding updates, offers, or support related to Foodometry.</li>
          </ul>
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>3. Data Protection</h2>
        <p>
          We take your privacy seriously and use a variety of security measures to protect your personal data, including:
          <ul>
            <li><strong>Encryption:</strong> We use industry-standard encryption to safeguard your information during transmission.</li>
            <li><strong>Access Controls:</strong> Access to your data is restricted to authorized personnel only.</li>
            <li><strong>Data Anonymization:</strong> We anonymize certain data to ensure that it cannot be traced back to an individual.</li>
          </ul>
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>4. User Rights</h2>
        <p>
          You have the following rights regarding your personal data:
          <ul>
            <li><strong>Access:</strong> You can request access to the personal data we hold about you.</li>
            <li><strong>Correction:</strong> You can request corrections to inaccurate or incomplete information.</li>
            <li><strong>Deletion:</strong> You can request that we delete your personal data in certain circumstances.</li>
            <li><strong>Opt-Out:</strong> You can opt-out of marketing communications by following the unsubscribe instructions in our emails.</li>
          </ul>
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>5. Third-Party Services</h2>
        <p>
          We may use third-party services (such as analytics and advertising providers) that collect, monitor, and analyze data. These services have their own privacy policies, and we encourage you to review them.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time. When we make changes, we will post the updated policy on this page with a revised "Effective Date." Please review this policy periodically.
        </p>
      </section>

      <section className="privacy-policy-section">
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy or the way we handle your data, please contact us at:
          <br />
          <strong>Email:</strong> privacy@foodometry.com
          <br />
          <strong>Phone:</strong> +123 456 7890
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
