import React from 'react';
import './contactus.css'; // Importing the CSS file

const Contact = () => {
  const handleLocateUs = () => {
    const address = encodeURIComponent('Srijan Corporate Park, Tower 1, 12th Floor, Unit No. - 1204, 2, EP & GP, Sector V, Bidhannagar, Kolkata, West Bengal 700091');
    const googleMapsUrl = `https://www.google.com/maps?q=${address}`;
    window.open(googleMapsUrl, '_blank'); // Opens the address in Google Maps
  };

  return (
    <div className="contact-container">
      <h2 style={{color:'#000'}}>Contact Us</h2>

      <div className="contact-info">
        
        <p><strong>Email:</strong> bhaskardavuluri8@gmail.com</p>
        <p><strong>Phone:</strong> +91 834 086 3204</p>
        <p><strong>Phone:</strong> +91 912 106 7423</p>
      </div>

      <div className="address">
        <h3>Our Address</h3>
        <p>1234 Street Name, City, Country</p>
      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon instagram">Instagram</a>
        </div>
      </div>

      <div className="gmail">
        <h3>Send us an email</h3>
        <p>You can also reach out to us at <a href="mailto:bhaskardavuluri8@gmail.com">bhaskardavuluri8@gmail.com</a></p>
        <p>Contact Us, Our customer service agents are available from 9AM - 7PM to assist you with any problem.</p>
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
    </div>
  );
};

export default Contact;
