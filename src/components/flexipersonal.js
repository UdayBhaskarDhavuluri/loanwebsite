import React, { useState } from 'react';
import './flexipersonal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faCheckCircle, faUser, faTools, faMoneyBillWave, faChartLine, faClock, faShieldAlt, faFileInvoice, faArrowAltCircleRight, faPlane, faGraduationCap, faShoppingCart, faHeartbeat, faRing, faBaby, faGamepad, faGift, faHome, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const FlexiPersonal = () => {
  const navigate = useNavigate();

  const handleCheckEligibility = () => {
    navigate('/login');
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
    <div className="flexi-container">
      <h1 className="flexi-heading">Flexi Personal Loan</h1>
      <p className="flexi-description">
        A <span className="highlight-text">Flexi Personal Loan</span> is a flexible, convenient borrowing option offered by various banks and financial institutions. It allows individuals to meet immediate financial needs without the rigid structure of a traditional personal loan. With this loan, borrowers can access funds when required and repay them according to their financial capacity. The unique feature of the Flexi Personal Loan is that it offers flexibility in terms of the loan amount, repayment schedule, and interest charges.
      </p>

      <h2 className="sub-heading">Key Features of a Flexi Personal Loan:</h2>
      <div className="feature-container">
        <div className="feature-box">
          <FontAwesomeIcon icon={faCreditCard} size="2x" />
          <p>Flexible Loan Amount</p>
        </div>
        <div className="feature-box">
          <FontAwesomeIcon icon={faCheckCircle} size="2x" />
          <p>Flexible Repayment Option</p>
        </div>
        <div className="feature-box">
          <FontAwesomeIcon icon={faUser} size="2x" />
          <p>Revolving Credit Facility</p>
        </div>
        <div className="feature-box">
          <FontAwesomeIcon icon={faMoneyBillWave} size="2x" />
          <p>Interest on Utilized Amount</p>
        </div>
        <div className="feature-box">
          <FontAwesomeIcon icon={faChartLine} size="2x" />
          <p>Low Interest Rates</p>
        </div>
        <div className="feature-box">
          <FontAwesomeIcon icon={faShieldAlt} size="2x" />
          <p>No Collateral</p>
        </div>
        <div className="feature-box">
          <FontAwesomeIcon icon={faClock} size="2x" />
          <p>Quick Disbursement</p>
        </div>
        <div className="feature-box">
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
          <p>Top-Up Facility</p>
        </div>
        <div className="feature-box">
          <FontAwesomeIcon icon={faFileInvoice} size="2x" />
          <p>Minimal Documentation</p>
        </div>
      </div>

      <h2 className="sub-heading">Advantages of a Flexi Personal Loan:</h2>
      <div className="advantage-container">
        <div className="advantage-box">
          <FontAwesomeIcon icon={faCheckCircle} size="2x" />
          <p>Flexible Borrowing and Repayment</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faMoneyBillWave} size="2x" />
          <p>Lower Interest Burden</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faTools} size="2x" />
          <p>Financial Relief for Emergencies</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faCreditCard} size="2x" />
          <p>Access to a Large Pool of Funds</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faChartLine} size="2x" />
          <p>Improved Cash Flow Management</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faCheckCircle} size="2x" />
          <p>No Prepayment Penalty</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="2x" />
          <p>Convenience and Easy Access</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faShieldAlt} size="2x" />
          <p>Helps Build Credit Score</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faUser} size="2x" />
          <p>Tailored to Individual Needs</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faFileInvoice} size="2x" />
          <p>Convenient Online Process</p>
        </div>
      </div>

      <h2 className="sub-heading">Purposes and Uses:</h2>
      <div className="advantage-container">
        <div className="advantage-box">
          <FontAwesomeIcon icon={faPlane} size="2x" />
          <p>Travel</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faGraduationCap} size="2x" />
          <p>Education</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faHeartbeat} size="2x" />
          <p>Emergency</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          <p>Shopping</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faRing} size="2x" />
          <p>Wedding</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faBaby} size="2x" />
          <p>Maternity</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faGamepad} size="2x" />
          <p>Hobbies</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faGift} size="2x" />
          <p>Occasion/Gifting</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faBriefcase} size="2x" />
          <p>Opportunity</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faBriefcase} size="2x" />
          <p>Low Salary</p>
        </div>
        <div className="advantage-box">
          <FontAwesomeIcon icon={faHome} size="2x" />
          <p>Home Renovation</p>
        </div>
      </div>

      <p className="flexi-conclusion">
        A <span className="highlight-text">Flexi Personal Loan</span> offers an excellent financial solution for those seeking a flexible and accessible way to borrow money. Whether you need funds for a personal emergency, home improvement, or a wedding, the Flexi loan provides ease of access, lower interest charges, and the ability to repay based on your financial capacity. The revolving credit nature and flexibility in repayment make it an ideal choice for borrowers who need financial freedom without being locked into rigid structures. With minimal documentation and fast disbursement, this loan option provides an all-around favorable solution for managing short-term financial requirements.
      </p>
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
      <div className="flexi-container">
        <h2 className="sub-heading">How to Apply for a Flexi Personal Loan Online at JustTap?</h2>
        <div className="apply-content">
          {/* <div className="apply-image">
            <img src="/images/apply-now.jpg" alt="Apply Now" />
          </div> */}
          <div  className="apply-steps">
            <ol>
              <li> 1.Sign up using mobile number.</li>
              <li> 2.Enter basic information & check eligibility.</li>
              <li> 3.Verify your profile by uploading KYC documents.</li>
              <li> 4.Provide bank account details.</li>
              <li> 5.Choose your loan amount and tenure.</li>
              <li> 6.Get loan disbursed directly into your bank account.</li>
            </ol>
            <button style={{backgroundColor:'skyblue',width:'25%',marginTop:10}}
              className="eligibility-button"
              onClick={handleCheckEligibility}
            >
              Check Eligibility
            </button>
          </div>

        </div>

        {/* Eligibility Criteria and Documentation Section */}
        <h1> Flexi Loan Eligibility Criteria And Documents</h1>
<div className="eligibilityDocsContainer">
  
  {/* Left Side - Eligibility Criteria */}
  <div className="eligibilitySection">
    <h2 className="sectionHeading">Eligibility Criteria</h2>
    <ul className="criteriaList">
      <li>
        <span className="icon">🇮🇳</span> Indian Citizen
      </li>
      <li>
        <span className="icon">🗓️</span> Age Limit: 21 - 60 years
      </li>
      <li>
        <span className="icon">💰</span> Monthly Income: minimum ₹10,000
      </li>
    </ul>
  </div>

  {/* Right Side - Documents Required */}
  <div className="documentsSection">
    <h2 className="sectionHeading">Documents Required</h2>
    <ul className="documentsList">
      <li>
        <span className="icon">📸</span> Photograph (Selfie)
      </li>
      <li>
        <span className="icon">🆔</span> Identity Proof (PAN)
      </li>
      <li>
        <span className="icon">🏠</span> Address Proof (Aadhaar, Passport)
      </li>
    </ul>
  </div>
</div>


      </div>

    </div>

  );
};

export default FlexiPersonal;
