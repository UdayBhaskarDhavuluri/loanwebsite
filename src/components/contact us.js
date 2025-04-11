import React,{ useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

import './contactus.css'; // Importing the CSS file

const Contact = () => {
  const handleLocateUs = () => {
    const address = encodeURIComponent('Srijan Corporate Park, Tower 1, 12th Floor, Unit No. - 1204, 2, EP & GP, Sector V, Bidhannagar, Kolkata, West Bengal 700091');
    const googleMapsUrl = `https://www.google.com/maps?q=${address}`;
    window.open(googleMapsUrl, '_blank'); // Opens the address in Google Maps
  };
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ fullName: "", email: "", message: "" }); // Reset form fields
  };


  return (
    
    <div className="contact-container">
      
      <div className="contact-section">
      {/* Left Side - Contact Information */}
      <div className="contact-details">
        <h2>Contact Us</h2>
        
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <p>Email: <a href="mailto:bhaskardavuluri8@gmail.com">bhaskardavuluri8@gmail.com</a></p>
        </div>

        <div className="contact-item">
          <FaPhone className="icon" />
          <p>Phone: +91 834 086 3204</p>
        </div>

        <div className="contact-item">
          <FaPhone className="icon" />
          <p>Phone: +91 912 106 7423</p>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <p>Our Address: 1234 Street Name, City, Country</p>
        </div>

        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon facebook" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="social-icon twitter" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon instagram" /></a>
        </div>

        <h3>Send us an email</h3>
        <p>You can also reach out to us at <a href="mailto:bhaskardavuluri8@gmail.com">bhaskardavuluri8@gmail.com</a></p>

        <p className="customer-service">
          Our customer service agents are available from <strong>9 AM - 7 PM</strong> to assist you with any problem.
        </p>
      </div>

      {/* Right Side - Empty Space for an Image */}
      <div  className="contact-image">
      <img src="https://th.bing.com/th/id/OIP.jEzPKIUcRD2LQGrNF-WxHgHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Contact Us Office" />

        {/* Add an image here */}
      </div>
    </div>

      {/* Office Location Section */}
      <div className="office-location">
        <div className="map-container">
          {/* Google Maps embedded iframe */}
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed/v1/place?q=Srijan+Corporate+Park,+Tower+1,+12th+Floor,+Unit+No.+-+1204,+2,+EP+&+GP,+Sector+V,+Bidhannagar,+Kolkata,+West+Bengal+700091&key=YOUR_GOOGLE_MAPS_API_KEY"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>

        <div className="location-details">
          <h3>Office Headquarters</h3>
          <p>
            PS Srijan Corporate Park, Tower 1, 12th Floor, Unit No. - 1204, 2, EP & GP, Sector V, Bidhannagar, Kolkata, West Bengal 700091
          </p>
          <button className="locate-us-btn" onClick={handleLocateUs}>Locate Us</button>
        </div>
      </div>
      <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter a valid email address"
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
