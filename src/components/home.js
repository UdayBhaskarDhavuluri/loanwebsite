import React, { useState, useEffect } from 'react';
import googlePlayImg from '../loan_images/playstore.jpg';  // Assuming you have the image in the assets folder
import appStoreImg from '../loan_images/appstore.jpg'; // Assuming you have the image in the assets folder
import newImage from '../loan_images/liked1.jpg'; // Your new image
import '@fortawesome/fontawesome-free/css/all.min.css';


const Home = () => {
  // State for the counters
  const [downloads, setDownloads] = useState(0);
  const [happyUsers, setHappyUsers] = useState(0);
  const [loanDisbursed, setLoanDisbursed] = useState(0);
  const [rating] = useState(0);
  // Example rating

  // Use effect hook to simulate the counter increments (you can modify this logic as per your requirements)
  useEffect(() => {
    const downloadInterval = setInterval(() => setDownloads(prev => prev + 10), 1000);
    const happyUserInterval = setInterval(() => setHappyUsers(prev => prev + 5), 1000);
    const loanDisbursedInterval = setInterval(() => setLoanDisbursed(prev => prev + 2), 1000);

    return () => {
      clearInterval(downloadInterval);
      clearInterval(happyUserInterval);
      clearInterval(loanDisbursedInterval);
    };
  }, []);

  return (
    <div className="App">
     <div className="header-container" style={{ display: 'flex', justifyContent: 'space-between',width:'96.4%', padding: '40px', backgroundColor: 'skyblue' }}>
        {/* Left Side: Text and App Store Images */}
        <div style={{ flex: 1, paddingRight: '40px' }}>
          <h1>JustTap: EasyFinance</h1>
          <h4>Just Tap, Loan in a Snap</h4>

          {/* Images linking to Google Play and App Store */}
          <div style={{ display: 'flex', gap: '20px', marginLeft: 150 }}>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <img
                src={googlePlayImg}
                alt="Google Play"
                style={{
                  maxWidth: '200px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add smooth transition effect
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)'; // Scale the image up on hover
                  e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Add a shadow effect
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'; // Reset scale when the mouse leaves
                  e.target.style.boxShadow = 'none'; // Remove the shadow
                }}
              />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src={appStoreImg}
                alt="App Store"
                style={{
                  maxWidth: '200px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add smooth transition effect
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)'; // Scale the image up on hover
                  e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Add a shadow effect
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'; // Reset scale when the mouse leaves
                  e.target.style.boxShadow = 'none'; // Remove the shadow
                }}
              />
            </a>
          </div>
        </div>

        {/* Right Side: Feature Boxes */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{
              flex: '1', 
              padding: '20px', 
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              textAlign: 'center', 
              backgroundColor: '#f8f8f8', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
              transition: 'transform 0.3s ease, background-color 0.3s ease'
            }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <i className="fa fa-credit-card" style={{ fontSize: '40px', color: '#4CAF50', marginBottom: '10px' }}></i>
              <h3>Instant Loans</h3>
              <p>Get the funds you need in no time.</p>
            </div>
            <div style={{
              flex: '1', 
              padding: '20px', 
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              textAlign: 'center', 
              backgroundColor: '#f8f8f8', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
              transition: 'transform 0.3s ease, background-color 0.3s ease'
            }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <i className="fa fa-refresh" style={{ fontSize: '40px', color: '#2196F3', marginBottom: '10px' }}></i>
              <h3>Easy Repayments</h3>
              <p>Flexible payment options to suit your needs.</p>
            </div>
            <div style={{
              flex: '1', 
              padding: '20px', 
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              textAlign: 'center', 
              backgroundColor: '#f8f8f8', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
              transition: 'transform 0.3s ease, background-color 0.3s ease'
            }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <i className="fa fa-clock" style={{ fontSize: '40px', color: '#FF9800', marginBottom: '10px' }}></i>
              <h3>Fastest Approvals</h3>
              <p>Get your loan approved quickly and hassle-free.</p>
            </div>
            <div style={{
              flex: '1', 
              padding: '20px', 
              border: '1px solid #ccc', 
              borderRadius: '8px', 
              textAlign: 'center', 
              backgroundColor: '#f8f8f8', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
              transition: 'transform 0.3s ease, background-color 0.3s ease'
            }} 
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <i className="fa fa-university" style={{ fontSize: '40px', color: '#9C27B0', marginBottom: '10px' }}></i>
              <h3>Direct Bank Transfer</h3>
              <p>Funds transferred directly to your bank account.</p>
            </div>
          </div>
        </div>
      </div>


      {/* New container with text and image */}
      <div className="new-container" style={{ display: 'flex', alignItems: 'center', padding: '40px' }}>
        {/* Text Section */}
        <div className="text-section" style={{ flex: 1, paddingRight: '20px' }}>
          <h2>Why Choose JustTap?</h2>
          <p>
            JustTap offers a seamless and hassle-free experience for obtaining loans. Whether you need a personal loan or
            business loan, we ensure quick and easy access to funds, with no hidden fees or complicated processes.
          </p>
        </div>

        {/* Image Section */}
        <div className="image-section" style={{ flex: 1 }}>
          <img src={newImage} alt="Why Choose JustTap" style={{ width: '100%', borderRadius: '8px' }} />
        </div>
      </div>

      {/* New Container with Heading and 4 Feature Boxes */}
      <div className="why-choose-container" style={{ padding: '40px', textAlign: 'center',backgroundColor:'#000' }}>
        <h2 style={{color:'#ffffff'}}>Why Choose JustTap Credit Loan App?</h2>
        
        {/* 4 Small Feature Boxes */}
        <div className="feature-boxes" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
          <div className="feature-box" style={{ flex: 1, padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', textAlign: 'center' }}>
            <h3>Instant Loans</h3>
            <p>Get the funds you need instantly.</p>
          </div>
          <div className="feature-box" style={{ flex: 1, padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', textAlign: 'center' }}>
            <h3>Direct Bank Transfer</h3>
            <p>Funds directly transferred to your bank account.</p>
          </div>
          <div className="feature-box" style={{ flex: 1, padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', textAlign: 'center' }}>
            <h3>Fastest Approvals</h3>
            <p>Quick and hassle-free loan approvals.</p>
          </div>
          <div className="feature-box" style={{ flex: 1, padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', textAlign: 'center' }}>
            <h3>Easy Repayments</h3>
            <p>Flexible and simple repayment options.</p>
          </div>
        </div>
      </div>

      {/* Small container with counters and emojis */}
      <div className="stats-container" style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
        <h2>Our Achievements</h2>
        
        {/* Counter Boxes */}
        <div className="counter-boxes" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
          <div className="counter-box" style={{ padding: '20px', backgroundColor: 'lightgrey', borderRadius: '8px', textAlign: 'center', width: '200px' }}>
            <h3>App Downloads</h3>
            <p>📲 {downloads}+</p>
          </div>
          <div className="counter-box" style={{ padding: '20px', backgroundColor: 'lightgrey', borderRadius: '8px', textAlign: 'center', width: '200px' }}>
            <h3>Happy Users</h3>
            <p>😊 {happyUsers}+</p>
          </div>
          <div className="counter-box" style={{ padding: '20px', backgroundColor: 'lightgrey', borderRadius: '8px', textAlign: 'center', width: '200px' }}>
            <h3>Loan Disbursed</h3>
            <p>💵 {loanDisbursed}+</p>
          </div>
          <div className="counter-box" style={{ padding: '20px', backgroundColor: 'lightgrey', borderRadius: '8px', textAlign: 'center', width: '200px' }}>
            <h3>Ratings</h3>
            <p>⭐ {rating} / 5</p>
          </div>
        </div>
      </div>

      {/* New container for JustTap Drivers */}
      <div className="justtap-drivers-container" style={{ padding: '40px', textAlign: 'center', backgroundColor: '#e0f7fa' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 'bold', color: 'skyblue' }}>Made for Our <span style={{ fontSize: '45px', color: '#0277bd' }}>JustTap</span> Drivers</h2>
        <p style={{ fontSize: '18px', color: '#333' }}>
          Across thousands of drivers, JustTap is helping you reach your dreams. Join our community and achieve success together.
        </p>
      </div>
    </div>
  );
};



export default Home;