import React from 'react';
import './footer.css'; // Optional for styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Links */}

        {/* Legal Section */}
        <div className="legal-section">
          <h3 className="legal-heading">Legal</h3>
          <ul className="legal-links">
            <li><a href="/terms">Terms and Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/security">Security Centre</a></li>
            <li><a href="/csr">Corporate Social Responsibility Policy</a></li>
            <li><a href="/corporate-info">Corporate Information</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <h3 className="services-heading">Services</h3>
          <ul className="services-links">
            <li><a href="/flexi-personal-loan">Flexi Personal Loan</a></li>
            <li><a href="/personal-loan-for-drivers">Personal Loan for Drivers</a></li>
            <li><a href="/personal-loan-for-customers">Personal Loan for Customers</a></li>
            <li><a href="/business-loan">Business Loan</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="company-section">
          <h3 className="company-heading">Company</h3>
          <ul className="company-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/news-board">News Board</a></li>
            <li><a href="/partner-with-us">Partner with Us</a></li>
            <li><a href="/awards">Awards</a></li>
          </ul>
        </div>

        {/* JUSTTAP Section */}
        <div className="justtap-section">
          <h3 className="justtap-heading">JUSTTAP</h3>
          <ul className="justtap-links">
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/responsible-lending">Responsible Lending</a></li>
            <li><a href="/instant-personal-loan-app">Instant Personal Loan App</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>


      <div className='social-top-icons'>
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>


        <div className="app-download-images">
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img
              src={require('../loan_images/playstore.jpg')}
              alt="Get it on Google Play"
              className="google-play-image"
            />
          </a> <br />
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src={require('../loan_images/appstore.jpg')}
              alt="Download on the App Store"
              className="app-store-image"
            />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;