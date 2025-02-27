import React from 'react';
import googlePlayImg from '../loan_images/googleplay.jpg';  // Assuming the image path is correct
import appStoreImg from '../loan_images/app.jpg';  // Assuming the image path is c

// Inline Styles for Components
const InstantPersonal = () => {
  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const contentStyle = {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.8',
    marginBottom: '30px',
  };

  const paragraphStyle = {
    marginBottom: '15px',
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '1.2rem',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'block',
    margin: '20px auto',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const featuresContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '40px',
  };

  const featureStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  const featureHeadingStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  };

  const featureDescriptionStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  const iconStyle = {
    fontSize: '3rem',
    color: '#4CAF50',
    marginBottom: '15px',
  };

  // Eligibility Criteria Section Style
  const eligibilityContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '40px',
  };

  const eligibilityFeatureStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  const eligibilityFeatureHeadingStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  };

  const eligibilityFeatureDescriptionStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  // Documentation Section Style
  const documentationContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '40px',
  };

  const documentationFeatureStyle = {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  const documentationFeatureHeadingStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  };

  const documentationFeatureDescriptionStyle = {
    fontSize: '1rem',
    color: '#555',
  };
  const appStorePlayStoreContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '40px',
    width: '97%',
    // Adjust the height for a small height container
  };

  const appTextStyle = {
    fontSize: '1.5rem',
    color: '#fff',
    flex: 1,
    textAlign: 'center',
  };

  const logosContainerStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '120px',  // Adjust size of logos
    height: 'auto',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      {/* About Instant Personal Loan Section */}
      <h1 style={headingStyle}>About Instant Personal Loan App</h1>
      <div style={contentStyle}>
        <p style={paragraphStyle}>
          Welcome to JustTap, your trusted partner for personalised loan solutions across India. Where cutting-edge technology is combined with a customer-centric approach to make every borrowing experience seamless and transparent.
        </p>
        <p style={paragraphStyle}>
          There are times when everyone finds themselves in need of extra funds due to a number of reasons. A salary might get delayed while monthly bills are overdue or unforeseen expenses can occur out of the blue. Whatever the reason, you can enjoy quick funds up to ₹5 Lakhs without any hassles whatsoever.
        </p>
        <p style={paragraphStyle}>
          It is also ensured that you get your loan directly in your bank account in a secure and timely manner. The loan approvals are almost instant and the disbursal does not take more than 10 minutes the majority of the time. This allows you to plan your finances better and even gives you the funds to cover any sudden or unexpected expenditures that may arise during the month.
        </p>
        <p style={paragraphStyle}>
          No more worrying about the need for emergency funds or about long waiting periods to get your loan. Just apply for the loan amount you need using a smooth and seamless process that’s 100% online. Fill in your basic details and track your available credit limit as well. Select the loan amount you want and customise your repayment plan as per your convenience. Select a time period that works for you and get your funds with fantastic savings as well. Give your financial well-being a real boost with flexible loans, transparent terms, and quick approvals on JustTap.
        </p>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Apply Now
        </button>
      </div>

      {/* Features and Benefits Section */}
      <h1 style={headingStyle}>Features and Benefits of JustTap Loan</h1>
      <p>Apart from the ease of application, JustTap offers these key features and benefits to its customers</p>
      <div style={featuresContainerStyle}>
        {/* Feature 1 */}
        <div style={featureStyle}>
          <div style={iconStyle}>💰</div>
          <h3 style={featureHeadingStyle}>Loans from ₹10,000 to ₹1 Lakh</h3>
          <p style={featureDescriptionStyle}>
            Get instant personal loans starting from ₹10,000 up to ₹1 Lakh to meet your urgent needs, without any hassle.
          </p>
        </div>
        {/* Feature 2 */}
        <div style={featureStyle}>
          <div style={iconStyle}>💳</div>
          <h3 style={featureHeadingStyle}>Easy Loan Repayment</h3>
          <p style={featureDescriptionStyle}>
            Enjoy flexible repayment options, making it easier for you to plan your finances and repay at your convenience.
          </p>
        </div>
        {/* Feature 3 */}
        <div style={featureStyle}>
          <div style={iconStyle}>🔒</div>
          <h3 style={featureHeadingStyle}>100% Online & Secure</h3>
          <p style={featureDescriptionStyle}>
            Apply for a loan securely with a smooth and fully online process, keeping your information safe and confidential.
          </p>
        </div>
        {/* Feature 4 */}
        <div style={featureStyle}>
          <div style={iconStyle}>⚡</div>
          <h3 style={featureHeadingStyle}>Fast Loan Disbursal</h3>
          <p style={featureDescriptionStyle}>
            Experience quick loan approval and funds disbursal within minutes, making emergency situations manageable.
          </p>
        </div>
        {/* Feature 5 */}
        <div style={featureStyle}>
          <div style={iconStyle}>📊</div>
          <h3 style={featureHeadingStyle}>Attractive Rates of Interest</h3>
          <p style={featureDescriptionStyle}>
            Enjoy competitive interest rates that make borrowing affordable and easy to repay without financial stress.
          </p>
        </div>
        {/* Feature 6 */}
        <div style={featureStyle}>
          <div style={iconStyle}>📄</div>
          <h3 style={featureHeadingStyle}>Hassle-Free Documentation</h3>
          <p style={featureDescriptionStyle}>
            Forget long forms and paperwork. With JustTap, the documentation process is minimal and completely online.
          </p>
        </div>
      </div>

      {/* Eligibility Criteria Section */}
      <h1 style={headingStyle}>Eligibility Criteria for Instant Loan</h1>
      <p>Before you apply for an instant loan with JustTap, make sure you meet the following eligibility criteria:</p>
      <div style={eligibilityContainerStyle}>
        {/* Eligibility 1: Indian Citizen */}
        <div style={eligibilityFeatureStyle}>
          <div style={iconStyle}>🇮🇳</div>
          <h3 style={eligibilityFeatureHeadingStyle}>Indian Citizen</h3>
          <p style={eligibilityFeatureDescriptionStyle}>
            You must be a citizen of India to apply for a loan with JustTap. This ensures that only Indian residents can avail of the loan benefits.
          </p>
        </div>
        {/* Eligibility 2: Age Limit */}
        <div style={eligibilityFeatureStyle}>
          <div style={iconStyle}>🎂</div>
          <h3 style={eligibilityFeatureHeadingStyle}>Age Limit: 21-60 years</h3>
          <p style={eligibilityFeatureDescriptionStyle}>
            Applicants should be between 21 to 60 years old to apply for a loan. This ensures that you are in the right age range for loan eligibility.
          </p>
        </div>
        {/* Eligibility 3: Minimum Monthly Income */}
        <div style={eligibilityFeatureStyle}>
          <div style={iconStyle}>💵</div>
          <h3 style={eligibilityFeatureHeadingStyle}>Monthly Income: ₹10,000</h3>
          <p style={eligibilityFeatureDescriptionStyle}>
            You need to have a minimum monthly income of ₹10,000 to qualify for a loan. This ensures that you have the financial capacity to repay the loan.
          </p>
        </div>
      </div>

      {/* Documentation Section */}
      <h1 style={headingStyle}>Documentation for Instant Loan</h1>
      <p>To complete your loan application process, you will need to submit the following documents:</p>
      <div style={documentationContainerStyle}>
        {/* Documentation 1: Photograph (Selfie) */}
        <div style={documentationFeatureStyle}>
          <div style={iconStyle}>📸</div>
          <h3 style={documentationFeatureHeadingStyle}>Photograph (Selfie)</h3>
          <p style={documentationFeatureDescriptionStyle}>
            A recent photograph (selfie) of yourself is required to confirm your identity during the loan application process.
          </p>
        </div>
        {/* Documentation 2: Identity Proof (PAN) */}
        <div style={documentationFeatureStyle}>
          <div style={iconStyle}>🆔</div>
          <h3 style={documentationFeatureHeadingStyle}>Identity Proof (PAN)</h3>
          <p style={documentationFeatureDescriptionStyle}>
            A valid PAN card is needed as proof of your identity to verify your credentials and eligibility for the loan.
          </p>
        </div>
        {/* Documentation 3: Address Proof (Aadhar/Passport) */}
        <div style={documentationFeatureStyle}>
          <div style={iconStyle}>🏠</div>
          <h3 style={documentationFeatureHeadingStyle}>Address Proof (Aadhar/Passport)</h3>
          <p style={documentationFeatureDescriptionStyle}>
            Valid address proof such as your Aadhar card or passport is required to confirm your residential address for loan processing.
          </p>

        </div>

      </div>
      {/* App Store & Play Store Section */}
      <div style={appStorePlayStoreContainerStyle}>
        <div style={appTextStyle}>
          Unlock Your Financial Freedom Today - Get Your Loan Disbursed in Just 10 Minutes!
        </div>
        <div style={logosContainerStyle}>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src={appStoreImg}
              alt="App Store"
              style={logoStyle}
            />
          </a>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
            <img
              src={googlePlayImg}
              alt="Google Play"
              style={logoStyle}
            />
          </a>
        </div>
        

      </div>
      {/* How to download and install the JustTap instant personal loan App online? */}
      <h1 style={headingStyle}>How to download and install the JustTap instant personal loan App online?</h1>
      <div style={contentStyle}>
        <p style={paragraphStyle}>1. Open the App Store/ Play Store on your phone or <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">click here (App Store)</a> / <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">click here (Play Store)</a>.</p>
        <p style={paragraphStyle}>2. Search for the JustTap personal loan app.</p>
        <p style={paragraphStyle}>3. Download/Install the JustTap instant personal loan app.</p>
        <p style={paragraphStyle}>4. Once the installation is done, you'll see its icon on your device.</p>
      </div>


      


      <h1 style={headingStyle}>Personal Loan App Interest Rate and Charges</h1>
        <div style={featuresContainerStyle}>
          {/* Interest Rate */}
          <div style={featureStyle}>
            <div style={iconStyle}>📈</div>
            <h3 style={featureHeadingStyle}>Interest Rate</h3>
            <p style={featureDescriptionStyle}>[Relevant content about interest rates]</p>
          </div>
          {/* Penal Interest */}
          <div style={featureStyle}>
            <div style={iconStyle}>⚠️</div>
            <h3 style={featureHeadingStyle}>Penal Interest</h3>
            <p style={featureDescriptionStyle}>[Relevant content about penal interest]</p>
          </div>
          {/* Loan Processing Charges */}
          <div style={featureStyle}>
            <div style={iconStyle}>💼</div>
            <h3 style={featureHeadingStyle}>Loan Processing Charges</h3>
            <p style={featureDescriptionStyle}>[Relevant content about processing charges]</p>
          </div>
          {/* Loan Cancellation */}
          <div style={featureStyle}>
            <div style={iconStyle}>❌</div>
            <h3 style={featureHeadingStyle}>Loan Cancellation</h3>
            <p style={featureDescriptionStyle}>[Relevant content about loan cancellation]</p>
          </div>
          {/* GST on Onboarding and Processing Fee */}
          <div style={featureStyle}>
            <div style={iconStyle}>💰</div>
            <h3 style={featureHeadingStyle}>GST on Onboarding and Processing Fee</h3>
            <p style={featureDescriptionStyle}>[Relevant content about GST]</p>
          </div>
          {/* Onboarding Fee for New Customers */}
          <div style={featureStyle}>
            <div style={iconStyle}>🆕</div>
            <h3 style={featureHeadingStyle}>Onboarding Fee for New Customers</h3>
            <p style={featureDescriptionStyle}>[Relevant content about onboarding fees]</p>
          </div>
        </div>

      {/* Achieve More Section */}
      <div style={appStorePlayStoreContainerStyle}>
        <div style={appTextStyle}>
          Achieve more, worry less. Start your loan journey today with JustTap
        </div>
        <div style={logosContainerStyle}>
          <button
            style={{...buttonStyle, margin: '0'}}
            onClick={() => window.location.href = '/loanapppage'}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Fulfil Your Business Needs Section */}
      <div style={appStorePlayStoreContainerStyle}>
        <div style={appTextStyle}>
          Fulfil your business needs with a Quick Loan now!
        </div>
        <div style={logosContainerStyle}>
          <button
            style={{...buttonStyle, margin: '0'}}
            onClick={() => window.location.href = '/login'}
            onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Apply Now
          </button>
        </div>
      </div>


    </div>
  );
};

export default InstantPersonal;
