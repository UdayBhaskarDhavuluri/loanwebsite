import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
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
  const feedbackData = [
    { name: "Rahul Sharma", feedback: "Amazing loan service! The process was seamless and hassle-free." },
    { name: "Priya Verma", feedback: "Quick approval and low interest rates. Highly recommended!" },
    { name: "Amit Kapoor", feedback: "Best loan experience ever! Customer support was very helpful." },
    { name: "Neha Singh", feedback: "Fast processing and easy documentation. Got my loan in minutes!" },
    { name: "Vikram Patil", feedback: "User-friendly platform with excellent service!" },
    { name: "Sanya Mehta", feedback: "Very convenient loan application process. No hidden charges!" },
    { name: "Rohan Das", feedback: "Efficient and trustworthy. The best loan provider in India." },
    { name: "Kavita Joshi", feedback: "Smooth process and transparent policies. Highly satisfied!" },
    { name: "Raj Malhotra", feedback: "Great experience! The loan was approved instantly." },
    { name: "Meena Iyer", feedback: "Easy repayment options and great customer support." }
  ];
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (startIndex + itemsPerPage < feedbackData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  


  return (
    <div className="Businesscontainer">
      <div className="flex-container">
        {/* First Part: Business Loan Info */}
        <div className="loan-info">
          <h2 style={{color:'#fff'}}>Business Loan</h2>
          <p style={{color:'#fff'}}>
            With JustTap, you can quickly get the business loan you need to fuel your business growth. Enjoy a seamless,
            hassle-free loan application process that gets you funds within no time!
          </p>
          <p style={{color:'#fff'}}>
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
            <button style={{backgroundColor:'skyblue',color:'#fff'}} type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Features and Benefits Container */}
      <div className="features-container">
        <h2>Features and Benefits of a Business Loan with JustTap</h2>
        <div className="features-boxes">
          {/* Box 1: Available 24/7 */}
          <div className="feature-box">
            <FaClock className="Business-icon" />
            <h4>Available 24/7</h4>
            <p>Apply anytime, anywhere. Our loan application process is available around the clock.</p>
          </div>

          {/* Box 2: Collateral Free Business Loan */}
          <div className="feature-box">
            <FaHome className="Business-icon" />
            <h4>Collateral Free Business Loan</h4>
            <p>No need to put up assets as collateral. Get the funds you need without any security.</p>
          </div>

          {/* Box 3: Collateral Free Funds */}
          <div className="feature-box">
            <FaDollarSign className="Business-icon" />
            <h4>Collateral Free Funds</h4>
            <p>Access funds with no collateral requirement, ensuring simplicity and flexibility.</p>
          </div>

          {/* Box 4: Quick Loan Disbursal */}
          <div className="feature-box">
            <FaCheckCircle className="Business-icon" />
            <h4>Quick Loan Disbursal</h4>
            <p>Get your loan disbursed within a short period, so you can focus on growing your business.</p>
          </div>

          {/* Box 5: Hassle-Free Documentation */}
          <div className="feature-box">
            <FaFileInvoice className="Business-icon" />
            <h4>Hassle-Free Documentation</h4>
            <p>Our documentation process is simple and requires minimal effort on your part.</p>
          </div>

          {/* Box 6: Processing Fee */}
          <div className="feature-box">
            <FaRupeeSign className="Business-icon" />
            <h4>Processing Fee ranges from ₹350 to ₹16,800</h4>
            <p>Our processing fees are transparent and affordable, ranging from ₹350 to ₹16,800 based on loan amount.</p>
          </div>

          {/* Box 7: Interest Rates */}
          <div className="feature-box">
            <FaPercent className="Business-icon" />
            <h4>Interest Rates Range from 18% to 29.95% p.a</h4>
            <p>Flexible interest rates make it easier for businesses to repay their loan.</p>
          </div>

          {/* Box 8: Loans Ranging from ₹1,000 to ₹4 Lakhs */}
          <div className="feature-box">
            <FaRegFileAlt className="Business-icon" />
            <h4>Loans Ranging from ₹1,000 to ₹4 Lakhs</h4>
            <p>Get loan amounts that suit your business size and requirements, from ₹1,000 to ₹4 Lakhs.</p>
          </div>

          {/* Box 9: Tenures */}
          <div className="feature-box">
            <FaCalendarAlt className="Business-icon" />
            <h4>Tenures Ranging from 3 to 24 months</h4>
            <p>Choose a repayment tenure that best fits your business’s cash flow, from 3 to 24 months.</p>
          </div>
        </div>
      </div>
      <div className="eligibility-documetsContainer">
      {/* Eligibility Criteria Section */}
      <div className="Businesseligibility-container">
        <h2>Eligibility Criteria:</h2>
        <div className="Businesseligibility-boxes">
          <div className="Businesseligibility-box">
            <FaUserAlt className="icon" />
            <h4>Indian Citizen</h4>
          </div>
          <div className="Businesseligibility-box">
            <FaCalendarAlt className="icon" />
            <h4>Age above 21 years</h4>
          </div>
          <div className="Businesseligibility-box">
            <FaHome className="icon" />
            <h4>Business operations for a minimum of 12 months</h4>
          </div>
          <div className="Businesseligibility-box">
            <FaIdCard className="icon" />
            <h4>Business operations not operating out of blacklisted areas</h4>
          </div>
          <div className="Businesseligibility-box">
            <FaRegMoneyBillAlt className="icon" />
            <h4>Minimum monthly personal income of ₹10,000</h4>
          </div>
          <div className="Businesseligibility-box">
            <FaRegMoneyBillAlt className="icon" />
            <h4>Minimum monthly household income of ₹25,000</h4>
          </div>
          <div className="Businesseligibility-box">
            <FaIdCard className="icon" />
            <h4>Possess Government approved Valid Identity Proof & Address Proof</h4>
          </div>
          <div className="Businesseligibility-box">
            <FaMobileAlt className="icon" />
            <h4>Aadhaar-linked mobile number</h4>
          </div>
        </div>
      </div>

      {/* Documents Required Section */}
      <div className="Businessdocuments-container">
        <h2>Documents Required?</h2>
        <div className="Businessdocuments-boxes">
          <div className="Businessdocuments-box">
            <FaCamera className="icon" />
            <h4>Photograph</h4>
          </div>
          <div className="Businessdocuments-box">
            <FaCreditCard className="icon" />
            <h4>PAN</h4>
          </div>
          <div className="Businessdocuments-box">
            <FaHome className="icon" />
            <h4>Address Proof (Permanent & Current Address)</h4>
          </div>
          <div className="Businessdocuments-box">
            <FaBuilding className="icon" />
            <h4>Business Income Proof (Bank Statements reflecting Business Income / GST Details)</h4>
          </div>
          <div className="Businessdocuments-box">
            <FaBook className="icon" />
            <h4>Business Ownership Proof (GST Details / Udyam Registration Certificate / Shop & Establishment Certificate / FSSAI License)</h4>
          </div>
        </div>
      </div>
      </div>




      {/* Apply Now Container */}
      <div className="apply-container">
        <h2 style={{color:'#fff'}}>Fulfill your business needs with a Quick Loan now!</h2>
        <button style={{width:'25%'}} onClick={() => window.location.href = '/loanapppage'}>Apply Now</button>
      </div>


      {/* Application Requirements Section */}
      <div className="application-requirements-container">
        <h2>Application Requirements!</h2>
        <div className="application-requirements-content">
          <ul className="application-requirements-list">
            <li> Mobile Number</li>
            <li> Email</li>
            <li> First & Last Name</li>
            <li> Date of Birth</li>
            <li> Gender</li>
            <li> PAN</li>
            <li> Employment Type</li>
            <li> Monthly Income</li>
            <li> Religion</li>
            <li> Address Proof</li>
          </ul>
          <ul className="application-requirements-list">
            <li> PAN Photo</li>
            <li> Selfie</li>
            <li> Permanent Address</li>
            <li> Current Address</li>
            <li> Education</li>
            <li> Profession</li>
            <li> Marital Status</li>
            <li> Father/Mother/Spouse Name</li>
            <li> Co-Applicant Details</li>
            <li> Reference Contact</li>
          </ul>
        </div>

      </div>
      <div className="feedback-container">
      <h2>Customers Feedback</h2>
      <div className="feedback-wrapper">
        <button className="arrow-btn left" onClick={handlePrev} disabled={startIndex === 0}>
          <FaArrowLeft />
        </button>
        
        <div className="feedback-boxes">
          {feedbackData.slice(startIndex, startIndex + itemsPerPage).map((feedback, index) => (
            <div key={index} className="feedback-box">
              <FaQuoteLeft className="quote-icon" />
              <p className="feedback-text">"{feedback.feedback}"</p>
              <h4 className="customer-name">- {feedback.name}</h4>
            </div>
          ))}
        </div>

        <button className="arrow-btn right" onClick={handleNext} disabled={startIndex + itemsPerPage >= feedbackData.length}>
          <FaArrowRight />
        </button>
      </div>
    </div>



      {/* Achieve More Section */}
      <div className="applynowContainer">
        <div className="appText" style={{color:'white',padding:10}}>
          Achieve more, worry less. Start your loan journey today with JustTap
        </div>
        <div className="logosContainer">
          <button style={{width:'25%'}}
          
            className="applybuttonStyle"
            onClick={() => window.location.href = '/loanapppage'}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#4CAF50')} // Hover color
            onMouseOut={(e) => (e.target.style.backgroundColor = '#008CBA')} // Default button color
          >
            Apply Now
            
          </button>
        </div>
      </div>
</div>
  );
};

export default BusinessLoan;
