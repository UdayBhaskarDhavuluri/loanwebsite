import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importing useNavigate from react-router-dom
import './navbar.css'; // Importing the CSS file for styling

const Navbar = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleLoginClick = () => {
    navigate('/login'); // Redirects to /login route
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link">Contact Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/faq" className="navbar-link">FAQ</Link>
        </li>
        <li className="navbar-item">
          <Link to="/blog" className="navbar-link">Blog</Link>
        </li>
        <li className="navbar-item">
          <Link to="/how-to-get" className="navbar-link">How to Get</Link>
        </li>
        <li className="navbar-item">
          <button onClick={handleLoginClick} className="login-btn">Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
