import React, { useState } from 'react';
import './businessloan.css';  // Import the CSS file
import { FaClock, FaHome, FaDollarSign, FaCheckCircle, FaFileInvoice, FaPercent, FaRupeeSign, FaCalendarAlt, FaRegFileAlt, FaUserAlt, FaRegMoneyBillAlt, FaIdCard, FaMobileAlt, FaCamera, FaCreditCard, FaBuilding, FaBook } from 'react-icons/fa'; // Consolidated icon imports

const BusinessLoan = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    loanAmount: '',
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Form submitted');
  };

  return (
    <div className="container">
      <div className="flex-container">
        {/* First Part: Business Loan Info */}
        <div className="loan-info">
          <h2>Business Loan</h2>
          <p>
            With JustTap, you can quickly get the business loan you need to fuel your business growth. Enjoy a seamless,
            hassle-free loan application process that gets you funds within no time!
          </p>
          <p>
            Whether you're starting a new business or expanding your existing one, our business loan options are designed
            to meet your needs. Apply for up to ₹4 Lakhs with flexible repayment options. Designed specifically for small and
            medium enterprises (SMEs), JustTap's business loans empower entrepreneurs like you to achieve your goals.
            Whether it's starting a new venture, expanding your operations, or managing everyday expenses, a personal loan for
            business is perfect for such uses.
            Get a hassle-free business loan from ₹1,000 to ₹4 Lakhs directly into your bank account. Simply keep your PAN card,
            Aadhaar card, and a business or income proof handy when applying.
            Choose a repayment tenure that suits your cash flow, ranging from 3 to 24 months. Apply now and let JustTap be your
            partner in success.
          </p>
        </div>

        {/* Second Part: Need More Details Form */}
        <div className="form-container">
          <h3>Need More Details?</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* First Name */}
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />

            {/* Last Name */}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />

            {/* Mobile Number */}
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
            />

            {/* Loan Amount */}
            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              placeholder="Loan Amount (up to ₹10,000)"
              max="10000"
              required
            />
            <span className="error-message" style={{ color: 'red' }}></span>

            {/* Checkbox for Terms & Conditions */}
            <label className="terms-label">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                required
              />
              <span style={{ color: 'red' }}>*</span>

              <span className="terms-checkbox">
                By continuing, you agree to{' '}
                <a href="/terms">Terms & Conditions</a> and{' '}
                <a href="/privacy">Privacy Policy</a> and receive communication from KreditBee via SMS, E-Mail, and WhatsApp.
              </span>
            </label>

            {/* Submit Button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Features and Benefits Container */}
      <div className="features-container">
        <h2>Features and Benefits of a Business Loan with JustTap</h2>
        <div className="features-boxes">
          {/* Box 1: Available 24/7 */}
          <div className="feature-box">
            <FaClock className="icon" />
            <h4>Available 24/7</h4>
            <p>Apply anytime, anywhere. Our loan application process is available around the clock.</p>
          </div>

          {/* Box 2: Collateral Free Business Loan */}
          <div className="feature-box">
            <FaHome className="icon" />
            <h4>Collateral Free Business Loan</h4>
            <p>No need to put up assets as collateral. Get the funds you need without any security.</p>
          </div>

          {/* Box 3: Collateral Free Funds */}
          <div className="feature-box">
            <FaDollarSign className="icon" />
            <h4>Collateral Free Funds</h4>
            <p>Access funds with no collateral requirement, ensuring simplicity and flexibility.</p>
          </div>

          {/* Box 4: Quick Loan Disbursal */}
          <div className="feature-box">
            <FaCheckCircle className="icon" />
            <h4>Quick Loan Disbursal</h4>
            <p>Get your loan disbursed within a short period, so you can focus on growing your business.</p>
          </div>

          {/* Box 5: Hassle-Free Documentation */}
          <div className="feature-box">
            <FaFileInvoice className="icon" />
            <h4>Hassle-Free Documentation</h4>
            <p>Our documentation process is simple and requires minimal effort on your part.</p>
          </div>

          {/* Box 6: Processing Fee */}
          <div className="feature-box">
            <FaRupeeSign className="icon" />
            <h4>Processing Fee ranges from ₹350 to ₹16,800</h4>
            <p>Our processing fees are transparent and affordable, ranging from ₹350 to ₹16,800 based on loan amount.</p>
          </div>

          {/* Box 7: Interest Rates */}
          <div className="feature-box">
            <FaPercent className="icon" />
            <h4>Interest Rates Range from 18% to 29.95% p.a</h4>
            <p>Flexible interest rates make it easier for businesses to repay their loan.</p>
          </div>

          {/* Box 8: Loans Ranging from ₹1,000 to ₹4 Lakhs */}
          <div className="feature-box">
            <FaRegFileAlt className="icon" />
            <h4>Loans Ranging from ₹1,000 to ₹4 Lakhs</h4>
            <p>Get loan amounts that suit your business size and requirements, from ₹1,000 to ₹4 Lakhs.</p>
          </div>

          {/* Box 9: Tenures */}
          <div className="feature-box">
            <FaCalendarAlt className="icon" />
            <h4>Tenures Ranging from 3 to 24 months</h4>
            <p>Choose a repayment tenure that best fits your business’s cash flow, from 3 to 24 months.</p>
          </div>
        </div>
      </div>
      {/* Eligibility Criteria Section */}
<div className="eligibility-container">
  <h2>Eligibility Criteria:</h2>
  <div className="eligibility-boxes">
    <div className="eligibility-box">
      <FaUserAlt className="icon" />
      <h4>Indian Citizen</h4>
    </div>
    <div className="eligibility-box">
      <FaCalendarAlt className="icon" />
      <h4>Age above 21 years</h4>
    </div>
    <div className="eligibility-box">
      <FaHome className="icon" />
      <h4>Business operations for a minimum of 12 months</h4>
    </div>
    <div className="eligibility-box">
      <FaIdCard className="icon" />
      <h4>Business operations not operating out of blacklisted areas</h4>
    </div>
    <div className="eligibility-box">
      <FaRegMoneyBillAlt className="icon" />
      <h4>Minimum monthly personal income of ₹10,000</h4>
    </div>
    <div className="eligibility-box">
      <FaRegMoneyBillAlt className="icon" />
      <h4>Minimum monthly household income of ₹25,000</h4>
    </div>
    <div className="eligibility-box">
      <FaIdCard className="icon" />
      <h4>Possess Government approved Valid Identity Proof & Address Proof</h4>
    </div>
    <div className="eligibility-box">
      <FaMobileAlt className="icon" />
      <h4>Aadhaar-linked mobile number</h4>
    </div>
  </div>
</div>

{/* Documents Required Section */}
<div className="documents-container">
  <h2>Documents Required?</h2>
  <div className="documents-boxes">
    <div className="documents-box">
      <FaCamera className="icon" />
      <h4>Photograph</h4>
    </div>
    <div className="documents-box">
      <FaCreditCard className="icon" />
      <h4>PAN</h4>
    </div>
    <div className="documents-box">
      <FaHome className="icon" />
      <h4>Address Proof (Permanent & Current Address)</h4>
    </div>
    <div className="documents-box">
      <FaBuilding className="icon" />
      <h4>Business Income Proof (Bank Statements reflecting Business Income / GST Details)</h4>
    </div>
    <div className="documents-box">
      <FaBook className="icon" />
      <h4>Business Ownership Proof (GST Details / Udyam Registration Certificate / Shop & Establishment Certificate / FSSAI License)</h4>
    </div>
  </div>
</div>




      {/* Apply Now Container */}
      <div className="apply-container">
        <h2>Fulfill your business needs with a Quick Loan now!</h2>
        <button onClick={() => window.location.href = '/loanapppage'}>Apply Now</button>
      </div>


      {/* Application Requirements Section */}
<div className="application-requirements-container">
  <h2>Application Requirements!</h2>
  <div className="application-requirements-content">
    <ul className="application-requirements-list">
      <li><span className="dot"></span> Mobile Number</li>
      <li><span className="dot"></span> Email</li>
      <li><span className="dot"></span> First & Last Name</li>
      <li><span className="dot"></span> Date of Birth</li>
      <li><span className="dot"></span> Gender</li>
      <li><span className="dot"></span> PAN</li>
      <li><span className="dot"></span> Employment Type</li>
      <li><span className="dot"></span> Monthly Income</li>
      <li><span className="dot"></span> Religion</li>
      <li><span className="dot"></span> Address Proof</li>
    </ul>
    <ul className="application-requirements-list">
      <li><span className="dot"></span> PAN Photo</li>
      <li><span className="dot"></span> Selfie</li>
      <li><span className="dot"></span> Permanent Address</li>
      <li><span className="dot"></span> Current Address</li>
      <li><span className="dot"></span> Education</li>
      <li><span className="dot"></span> Profession</li>
      <li><span className="dot"></span> Marital Status</li>
      <li><span className="dot"></span> Father/Mother/Spouse Name</li>
      <li><span className="dot"></span> Co-Applicant Details</li>
      <li><span className="dot"></span> Reference Contact</li>
    </ul>
  </div>
</div>

{/* How to Apply Section */}
<div className="how-to-apply-container">
  <h2>How to Apply for JustTap Business Loan?</h2>
  <div className="how-to-apply-content">
    {/* Left side - Mobile screen display */}
    <div className="mobile-screen">
      <div className="mobile-screen-content">
        {/* <p className="mobile-step" id="step1">Sign up using your mobile number</p>
        <p className="mobile-step" id="step2">Enter basic information and check eligibility</p>
        <p className="mobile-step" id="step3">Verify your profile by uploading KYC documents</p>
        <p className="mobile-step" id="step4">Verify your business by uploading KYB (Know Your Business) documents</p>
        <p className="mobile-step" id="step5">Provide bank account details</p>
        <p className="mobile-step" id="step6">Choose a loan amount and tenure</p>
        <p className="mobile-step" id="step7">Receive the funds directly in your bank account</p> */}
      </div>
    </div>

    {/* Right side - Text steps */}
    <div className="steps-list">
      <ol>
        <li onClick={() => document.getElementById('step1').scrollIntoView({ behavior: 'smooth' })}>Sign up using your mobile number</li>
        <li onClick={() => document.getElementById('step2').scrollIntoView({ behavior: 'smooth' })}>Enter basic information and check eligibility</li>
        <li onClick={() => document.getElementById('step3').scrollIntoView({ behavior: 'smooth' })}>Verify your profile by uploading KYC documents</li>
        <li onClick={() => document.getElementById('step4').scrollIntoView({ behavior: 'smooth' })}>Verify your business by uploading KYB (Know Your Business) documents</li>
        <li onClick={() => document.getElementById('step5').scrollIntoView({ behavior: 'smooth' })}>Provide bank account details</li>
        <li onClick={() => document.getElementById('step6').scrollIntoView({ behavior: 'smooth' })}>Choose a loan amount and tenure</li>
        <li onClick={() => document.getElementById('step7').scrollIntoView({ behavior: 'smooth' })}>Receive the funds directly in your bank account</li>
      </ol>
    </div>
  </div>
</div>

{/* Achieve More Section */}
<div className="appStorePlayStoreContainer">
  <div className="appText">
    Achieve more, worry less. Start your loan journey today with JustTap
  </div>
  <div className="logosContainer">
    <button
      className="buttonStyle"
      onClick={() => window.location.href = '/loanapppage'}
      onMouseOver={(e) => (e.target.style.backgroundColor = '#4CAF50')} // Hover color
      onMouseOut={(e) => (e.target.style.backgroundColor = '#008CBA')} // Default button color
    >
      Apply Now
    </button>
  </div>
</div>

{/* New Container
<div className="appStorePlayStoreContainer">
  <div className="appText">
    Unlock your financial freedom with JustTap. Apply now and get started!
  </div>
  <div className="logosContainer">
    <button
      className="buttonStyle"
      onClick={() => window.location.href = '/loanapppage'}
      onMouseOver={(e) => (e.target.style.backgroundColor = '#4CAF50')} // Hover color
      onMouseOut={(e) => (e.target.style.backgroundColor = '#008CBA')} // Default button color
    >
      Apply Now
    </button>
  </div>
</div> */}





    </div>
  );
};

export default BusinessLoan;
