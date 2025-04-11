// In PersonalLoanForDrivers.js
import React from 'react';
import './personaldriver.css';  // Import the external CSS file
import appStoreImg from '../loan_images/appstore.jpg'; // Update with the correct path
import googlePlayImg from '../loan_images/googleplay.jpg'; // Update with the correct path
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { useState } from 'react';


import loanImage from '../loan_images/mainlogo2.jpg';  // Update with the actual path to your image
import { FaDownload, FaMoneyBillWave, FaHandshake,FaClipboardList,FaEnvelope,FaUser,FaBirthdayCake,FaTransgender,FaBuilding,FaHome,FaGraduationCap,FaHeart,FaUserFriends,FaCreditCard,FaLink, FaCalendarAlt,FaUserTie,FaBriefcase,FaMobileAlt, FaClock, FaPercentage, FaCheckCircle, FaIdCard, FaMoneyBillAlt, FaAddressCard, FaCamera, FaWallet, FaFileInvoice } from "react-icons/fa"; // Import icons
 // Importing icons from react-icons

const PersonalLoanForDrivers = () => {
  const [imageUrl,setImageUrl] = useState('');

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
    <div className="personal-driver-page">
      
      {/* Main Content Container (Text and Image) */}
      <div className="containerDriver">
        <div className="text-container">
          <h2 className="heading">Personal Loan for Drivers</h2>
          <p className="Subtext">
            JustTap empowers salaried professionals like you to take control of their finances.
            With convenient online personal loans, you can access up to ₹5 Lakhs instantly, even with a minimum monthly salary of ₹10,000. 
            Whether it's managing your regular expenses or fulfilling your aspirations, JustTap's hassle-free loan for salaried individuals is designed to suit your needs. 
            Experience financial freedom at your fingertips with JustTap. Our easy-to-use digital platform offers a seamless personal loan EMI calculator application process, enabling you to secure a personal loan effortlessly. 
            Forget about tedious paperwork and long waiting periods. With us, your financial goals are just a few clicks away.
            <br />
            <br />
            Don't let your monthly salary hold you back. Face your finances with a loan from JustTap.
          </p>
        </div>
        <div className="image-container">
          <img src={loanImage} alt="Personal Loan" className="image" />
        </div>
      </div>
      



      {/* Features and Benefits Section */}
      <div className="features-container">
        <h2 className="heading">Features and Benefits of JustTap Loan for Drivers</h2>
        <p className="features-description">
          Discover the tailored advantages of JustTap’s loan offerings designed specifically for salaried employees. Our loan solutions come with a range of features that simplify the borrowing process and enhance financial flexibility.
        </p>
        
        <div className="features-list">
          <div className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <div>
              <h4 className="feature-heading">100% Online Process</h4>
              <p>Apply for a loan from anywhere, without stepping into a branch. Enjoy a seamless digital loan application process.</p>
            </div>
          </div>
          <div className="feature-item">
            <FaMoneyBillWave className="feature-icon" />
            <div>
              <h4 className="feature-heading">Flexible Loan Amounts</h4>
              <p>Choose loan amounts that suit your needs, from ₹10,000 to ₹5 Lakhs, based on your requirements.</p>
            </div>
          </div>
          <div className="feature-item">
            <FaClock className="feature-icon" />
            <div>
              <h4 className="feature-heading">Available 24/7</h4>
              <p>Apply for loans any time, day or night. Our platform is always ready to assist you with your loan application.</p>
            </div>
          </div>
          <div className="feature-item">
            <FaFileInvoice className="feature-icon" />
            <div>
              <h4 className="feature-heading">Stress-Free Documentation</h4>
              <p>No paperwork hassles! Just upload the required documents online and get approval in no time.</p>
            </div>
          </div>
          <div className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <div>
              <h4 className="feature-heading">Loan Approved in Minutes</h4>
              <p>Get approval in a matter of minutes, ensuring fast access to the funds you need.</p>
            </div>
          </div>
          <div className="feature-item">
            <FaPercentage className="feature-icon" />
            <div>
              <h4 className="feature-heading">Competitive Interest Rates</h4>
              <p>Enjoy some of the lowest interest rates in the market, ensuring affordable monthly payments.</p>
            </div>
          </div>
          <div className="feature-item">
            <FaHandshake className="feature-icon" />
            <div>
              <h4 className="feature-heading">Flexible Repayments</h4>
              <p>Choose a repayment plan that fits your financial situation. Customize your EMI schedules for greater convenience.</p>
            </div>
          </div>
          <div className="feature-item">
            <FaDownload className="feature-icon" />
            <div>
              <h4 className="feature-heading">Low Processing Fee</h4>
              <p>Benefit from low processing fees compared to other loan providers, maximizing your loan amount.</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className='heading'>Eligibility Criteria And Documents Required</h2>
      <div className="eligibility-container">
        
      {/* Eligibility Criteria Part */}
      <div className="eligibility">
        <h2><FaCheckCircle /> Eligibility Criteria</h2>
        <ul>
          <li><FaIdCard /> Indian Citizen</li>
          <li><FaCalendarAlt /> Age above 21 years</li>
          <li><FaUserTie /> Active employee with regular/permanent status of employment</li>
          <li><FaMoneyBillAlt /> Minimum monthly salary of ₹10,000</li>
          <li><FaWallet /> Minimum monthly household income of ₹25,000</li>
          <li><FaBriefcase /> 3 months of work experience in your current company</li>
          <li><FaAddressCard /> Possess Government approved Valid Identity Proof & Address Proof</li>
          <li><FaMobileAlt /> Aadhaar-linked mobile number</li>
        </ul>
      </div>

      {/* Documents Required Part */}
      <div className="documents">
        <h2><FaFileInvoice /> Documents Required</h2>
        <ul>
          <li><FaCamera /> Photograph</li>
          <li><FaIdCard /> PAN</li>
          <li><FaAddressCard /> Address Proof (Permanent & Current Address)</li>
          <li><FaFileInvoice /> Employment Proof (Salary Slip / Office ID / UAN authentication)</li>
          <li><FaWallet /> Income Proof (Bank Statement of Salary Account)</li>
        </ul>
      </div>
    </div>
    <div className="application-container">
      {/* Application Requirements Part 1 */}
      <div className="application-part">
        
        <h2><FaClipboardList /> Application Requirements</h2>
        <ul>
          <li><FaMobileAlt /> Mobile Number</li>
          <li><FaEnvelope /> Email</li>
          <li><FaUser /> First & Last Name</li>
          <li><FaBirthdayCake /> Date of Birth</li>
          <li><FaTransgender /> Gender</li>
          <li><FaIdCard /> PAN</li>
          <li><FaBriefcase /> Employment Type</li>
          <li><FaWallet /> Monthly Income</li>
          <li><FaBuilding /> Company Name</li>
          <li><FaHome /> Permanent Address</li>
        </ul>
        
      </div>

      {/* Application Requirements Part 2 */}
      <div className="application-part">
        <ul>
          <li><FaCamera /> PAN Photo</li>
          <li><FaCamera /> Selfie</li>
          <li><FaHome /> Current Address</li>
          <li><FaGraduationCap /> Education</li>
          <li><FaBriefcase /> Profession</li>
          <li><FaHeart /> Marital Status</li>
          <li><FaFileInvoice /> Income Proof (Bank Statement of Salary Account)</li>
          <li><FaFileInvoice /> Employment Proof (Salary Slip / Office ID/UAN)</li>
          <li><FaUserFriends /> Father/Mother/Spouse Name</li>
          <li><FaLink /> Reference Contact</li>
          <li><FaCreditCard /> Disbursement Bank Account Details</li>
          <li><FaLink /> eNACH/UPI e-mandate</li>
        </ul>
      </div>
    </div>
    

    {/* Achieve More Section */}
    <div className="applyContainer" style={{width:'100%',backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
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

      {/* how to apply */}
<div className="how-to-apply-container">
  <h2>How to Apply for JustTap Drivers Loan?</h2>
  <div className="how-to-apply-content">
    {/* Left side - Mobile screen display */}
    <div  className="mobile-screen">
     

      {imageUrl.length !== 0 && <img src = {imageUrl} alt='bhaskar'/>}
      
    </div>
 

    {/* Right side - Text steps */}
    <div className="steps-list">
      <ol>
        <li onClick={() => 
         
      setImageUrl('https://tse4.mm.bing.net/th?id=OIP.-o_8VnhFL2q8V948fIqnOwHaHa&pid=Api&P=0&h=180')}>Sign up using your mobile number</li>
       <li onClick={() =>  setImageUrl('https://tse4.mm.bing.net/th?id=OIP.A3DvEhLKy0Y1dCeCzSs2VAHaHa&pid=Api&P=0&h=180')}>Enter basic information and check eligibility</li>
        <li onClick={() => setImageUrl('https://tse3.mm.bing.net/th?id=OIP.srZRLYUCD2HQK35y_LC4wgHaEK&pid=Api&P=0&h=180')}>Verify your profile by uploading KYC documents</li>
        <li onClick={() => setImageUrl('https://tse4.mm.bing.net/th?id=OIP.SQxr-c3WOiVu5ZevVRgPWwHaEK&pid=Api&P=0&h=180')}>Verify your business by uploading KYB (Know Your Business) documents</li>
        <li onClick={() => setImageUrl('https://tse4.mm.bing.net/th?id=OIP.EKI6EXvnoBsg7IuFxULluwHaIZ&pid=Api&P=0&h=180')}>Provide bank account details</li>
        <li onClick={() => setImageUrl('https://tse2.mm.bing.net/th?id=OIP.JQANv7d6dX7tPj83LnN7OAHaEo&pid=Api&P=0&h=180')}>Choose a loan amount and tenure</li>
        <li onClick={() => setImageUrl('https://tse1.mm.bing.net/th?id=OIP.9LqRK35ZZDqUpqIza_TupwHaEm&pid=Api&P=0&h=180')}>Receive the funds directly in your bank account</li>
      </ol>
    </div>
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
<div className="app-store-play-store-container">
      <div className="app-text">
        Unlock Your Financial Freedom Today - Get Your Loan Disbursed in Just 10 Minutes!
      </div>
      <div className="logos-container">
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img src={appStoreImg} alt="App Store" className="store-logo" />
        </a>
        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
          <img src={googlePlayImg} alt="Google Play" className="store-logo" />
        </a>
      </div>
    </div>




    </div>
    

    
  );
};
export default PersonalLoanForDrivers;
