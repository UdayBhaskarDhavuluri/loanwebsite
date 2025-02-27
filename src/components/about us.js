import React from 'react';
import { FaRegCheckCircle, FaDollarSign, FaClock, FaUsers, FaCreditCard, FaHeadset, FaHandHoldingUsd, FaPaperPlane } from 'react-icons/fa';
import someImage from '../loan_images/liked4.jpg'; // Ensure the path to your image is correct
import personImage from '../loan_images/liked7.jpg'; // Make sure to replace with the correct path to your person image

const AboutUs = () => {
  return (
    <div style={{justifyContent:'center', alignItems:'center', padding: 20}}>
    {/* First About Us Section */}
    <div className="about-us-container" style={{ padding: '40px', textAlign: 'center', backgroundColor: 'skyblue', width: '95%' }}>
      <h2 style={{ fontSize: '36px', color: '#333' }}>About Us</h2>
      <p style={{ fontSize: '18px', color: '#000', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
        Welcome to JustTap-Loan— the financial empowerment JustTap Company for today’s Drivers! As an RBI-registered NBFC, we offer instant loans to Drivers with part-time income, salaried, and self-employed up to Rs. 50,000. We are more than just a lending platform; we are an ecosystem that also solves youth needs for insurance, jobs, and upskilling.
      </p>
  
      <div className="stats-container" style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px' }}>
        {/* App Downloads */}
        <div
          className="stat-box"
          style={{
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            textAlign: 'center',
            width: '200px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Initial shadow
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transition for hover effect
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)'; // Slight scaling on hover
            e.target.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.2)'; // Deepen shadow
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = ''; // Reset scale
            e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'; // Reset shadow
          }}
        >
          <h3 style={{ fontSize: '24px', color: '#333' }}>App Downloads</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>50 Million+</p>
        </div>
  
        {/* Happy Users */}
        <div
          className="stat-box"
          style={{
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            textAlign: 'center',
            width: '200px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Initial shadow
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transition for hover effect
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = '';
            e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
          }}
        >
          <h3 style={{ fontSize: '24px', color: '#333' }}>Happy Users</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>50 Million+</p>
        </div>
  
        {/* Loan Disbursed */}
        <div
          className="stat-box"
          style={{
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            textAlign: 'center',
            width: '200px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Initial shadow
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transition for hover effect
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = '';
            e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
          }}
        >
          <h3 style={{ fontSize: '24px', color: '#333' }}>Loan Disbursed</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>16K Crore+</p>
        </div>
  
        {/* App Rating */}
        <div
          className="stat-box"
          style={{
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            textAlign: 'center',
            width: '200px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Initial shadow
            transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transition for hover effect
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = '';
            e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
          }}
        >
          <h3 style={{ fontSize: '24px', color: '#333' }}>App Rating</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>4.8 ⭐</p>
        </div>
      </div>
    </div>
  
  
      {/* Second Section with Image and Paragraph */}
      <div className="story-container" style={{ display: 'flex', alignItems: 'center', padding: '40px', backgroundColor: '#f0f0f0' }}>
        {/* Text Section */}
        <div className="story-text" style={{ flex: 1, paddingRight: '20px' }}>
          <h2 style={{ fontSize: '36px', color: '#333' }}>Our Story</h2>
          <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
            JustTap was born to support the underserved Drivers of India— with part-time income, salaried professionals, gig workers, and self-employed individuals. In the backdrop of the evolving digital landscape, where traditional banking norms often fail to cater to the urgent needs of Drivers' added expenses, JustTap emerged as a beacon of financial inclusion. Today, we are one of India's largest financial empowerment platforms, which has created an ecosystem for financial independence by offering credit lines and career accelerator products.
          </p>
        </div>

        {/* Image Section */}
        <div className="story-image" style={{ flex: 1 }}>
          <img src={someImage} alt="Our Story" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>

      {/* New Section with Image of a Person and Paragraph */}
      <div className="person-container" style={{ display: 'flex', alignItems: 'center', padding: '40px', backgroundColor: '#ffffff',border: '2px solid #000 ',margin: 20
 }}>
        {/* Person Image */}
        <div className="person-image" style={{ flex: 1, paddingRight: '20px' }}>
          <img src={personImage} alt="Person" style={{ width: '100%', borderRadius: '8px' }} />
        </div>

        {/* Text Section */}
        <div className="person-text" style={{ flex: 1 }}>
          <h2 style={{ fontSize: '36px', color: '#333' }}>Meet Our founder</h2>
          <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
          Mr. Davuluri Nagendra is the Founder  of JustTap. He holds an DEGREE in  Bachelor of Business Administration. Nagendra has belived in his Idea where his  team is dedicated to empowering drivers and providing them with financial independence. We believe in making financial solutions easy, transparent, and accessible to all. The people behind JustTap are passionate about creating a future where financial assistance is just a tap away.
          </p>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="why-us-container" style={{ padding: '40px', backgroundColor: '#000' }}>
        <h2 style={{ fontSize: '36px', color: '#ffffff', textAlign: 'center' }}>Why Us?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginTop: '40px' }}>
          {/* Box 1 - 100% Online Process */}
          <div className="why-box" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1', borderRadius: '8px' }}>
            <FaRegCheckCircle style={{ fontSize: '40px', color: '#4CAF50' }} />
            <h3 style={{ fontSize: '24px', color: '#333', marginTop: '20px' }}>100% Online Process</h3>
            <p style={{ fontSize: '16px', color: '#555' }}>Quick and easy loan processing online.</p>
          </div>

          {/* Box 2 - Direct Bank Transfer */}
          <div className="why-box" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1', borderRadius: '8px' }}>
            <FaDollarSign style={{ fontSize: '40px', color: '#4CAF50' }} />
            <h3 style={{ fontSize: '24px', color: '#333', marginTop: '20px' }}>Direct Bank Transfer</h3>
            <p style={{ fontSize: '16px', color: '#555' }}>Fast transfers directly to your bank account.</p>
          </div>

          {/* Box 3 - Fastest Approvals */}
          <div className="why-box" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1', borderRadius: '8px' }}>
            <FaClock style={{ fontSize: '40px', color: '#4CAF50' }} />
            <h3 style={{ fontSize: '24px', color: '#333', marginTop: '20px' }}>Fastest Approvals</h3>
            <p style={{ fontSize: '16px', color: '#555' }}>Get instant loan approvals.</p>
          </div>

          {/* Box 4 - Trusted Customers */}
          <div className="why-box" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1', borderRadius: '8px' }}>
            <FaUsers style={{ fontSize: '40px', color: '#4CAF50' }} />
            <h3 style={{ fontSize: '24px', color: '#333', marginTop: '20px' }}>Trusted by Customers</h3>
            <p style={{ fontSize: '16px', color: '#555' }}>Thousands of satisfied drivers trust us.</p>
          </div>

          {/* Box 5 - Easy Repayments */}
          <div className="why-box" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1', borderRadius: '8px' }}>
            <FaCreditCard style={{ fontSize: '40px', color: '#4CAF50' }} />
            <h3 style={{ fontSize: '24px', color: '#333', marginTop: '20px' }}>Easy Repayments</h3>
            <p style={{ fontSize: '16px', color: '#555' }}>Flexible repayment options tailored to you.</p>
          </div>

          {/* Box 6 - 24/7 Support */}
          <div className="why-box" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1', borderRadius: '8px' }}>
            <FaHeadset style={{ fontSize: '40px', color: '#4CAF50' }} />
            <h3 style={{ fontSize: '24px', color: '#333', marginTop: '20px' }}>24/7 Support</h3>
            <p style={{ fontSize: '16px', color: '#555' }}>Our team is here to assist you any time.</p>
          </div>

          {/* Box 7 - Handholding */}
          <div className="why-box" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1', borderRadius: '8px' }}>
            <FaHandHoldingUsd style={{ fontSize: '40px', color: '#4CAF50' }} />
            <h3 style={{ fontSize: '24px', color: '#333', marginTop: '20px' }}>Handholding Support</h3>
            <p style={{ fontSize: '16px', color: '#555' }}>We guide you throughout the loan journey.</p>
          </div>

          {/* Box 8 - Fast Process */}
          <div className="why-box" style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1', borderRadius: '8px' }}>
            <FaPaperPlane style={{ fontSize: '40px', color: '#4CAF50' }} />
            <h3 style={{ fontSize: '24px', color: '#333', marginTop: '20px' }}>Fast Process</h3>
            <p style={{ fontSize: '16px', color: '#555' }}>Get the money you need within minutes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
