import React, { useState } from 'react';

// CSS for the Privacy Policy page
const containerStyle = {
  padding: '30px',
  fontFamily: 'Arial, sans-serif',
  // maxWidth: '800px',
  margin: 'auto',
};

const headingStyle = {
  fontSize: '28px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color:'#fff'
};

const sectionStyle = {
  marginBottom: '20px',
};

const subHeadingStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color:'white'
};

const paragraphStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  marginBottom: '10px',
  color:'#fff',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  marginTop: '20px',
  width:'250px'
};

const privacycontainer = {
  backgroundColor: 'rgba(0, 0, 0, 0.75)', /* Dark semi-transparent background */
  padding: '45px',
  borderRadius: '6px',
  width: '95%',
  // boxShadow: 0 4px 20px rgba(0, 0, 0, 0.5);

  justifyContent: 'center',
  alignItems: 'center',
}

const PrivacyPolicy = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div style={containerStyle}>
      <div style={privacycontainer}>
      <h1 style={headingStyle}>Privacy Policy</h1>

      <div style={sectionStyle}>
        <h2 style={subHeadingStyle}>1. Data Collected by Us</h2>
        <p style={paragraphStyle}>
          We collect personal information that you provide to us when you register for an account or interact with our services. This may include your name, contact information, identification documents, and other relevant data required to provide financial services.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={subHeadingStyle}>2. Usage and Purpose of Data Collected</h2>
        <p style={paragraphStyle}>
          The data we collect is used to provide you with our services, verify your identity, process loan applications, and ensure compliance with legal and regulatory requirements. We may also use your data to communicate important updates, offers, and provide customer support.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={subHeadingStyle}>3. Data Security Practices</h2>
        <p style={paragraphStyle}>
          We implement robust data security measures to protect your personal information from unauthorized access, alteration, or destruction. Our security practices comply with industry standards and best practices, including encryption and regular audits of our systems.
        </p>
        <p style={paragraphStyle}>
          In the event of a security breach, we will notify affected individuals and regulatory authorities as required by law. We also have procedures in place for the secure destruction of data once it is no longer needed.
        </p>
      </div>

      <button style={buttonStyle} onClick={toggleContent}>
        {showContent ? 'Hide Full Privacy Policy' : 'See Full Privacy Policy'}
      </button>

      {showContent && (
        <div style={sectionStyle}>
          <h2 style={subHeadingStyle}>Full Privacy Policy Content</h2>
          <p style={paragraphStyle}>
            This section would include the full, detailed Privacy Policy. You can outline other aspects here, such as third-party data sharing, cookies usage, user rights, and more. It is important to ensure that all relevant legal information is included in the full policy to comply with local laws and regulations.
          </p>
          <p style={paragraphStyle}>
            Please ensure that your Privacy Policy complies with the applicable laws, including data protection regulations such as GDPR, CCPA, or any specific regulations in your jurisdiction.
          </p>
        </div>
      )}
    </div>
    </div>
  );
};

export default PrivacyPolicy;
