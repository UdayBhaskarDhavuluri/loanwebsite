// In PersonalLoanForDrivers.js
import React from 'react';
import './personaldriver.css';  // Import the external CSS file

import loanImage from '../loan_images/taxi.jpg';  // Update with the actual path to your image
import { FaDownload, FaMoneyBillWave, FaHandshake,FaClipboardList,FaEnvelope,FaUser,FaBirthdayCake,FaTransgender,FaBuilding,FaHome,FaGraduationCap,FaHeart,FaUserFriends,FaCreditCard,FaLink, FaSignInAlt,FaCalendarAlt,FaUserTie,FaBriefcase,FaMobileAlt, FaClock, FaPercentage, FaCheckCircle, FaIdCard, FaMoneyBillAlt, FaAddressCard, FaCamera, FaWallet, FaFileInvoice } from "react-icons/fa"; // Import icons
 // Importing icons from react-icons

const PersonalLoanForDrivers = () => {
  return (
    <div className="personal-driver-page">
      
      {/* Main Content Container (Text and Image) */}
      <div className="container">
        <div className="text-container">
          <h2 className="heading">Personal Loan for Drivers</h2>
          <p className="text">
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

      {/* 4-Part Stats Container */}
      <div className="stats-container">
        <div className="stats-item">
          
          <div>
            <h4 className="stats-heading">App Downloads</h4>
            <p className="counter">1,250,000</p>
          </div>
        </div>
        <div className="gold-line"></div> {/* Line between items */}
        <div className="stats-item">
          
          <div>
            <h4 className="stats-heading">Total Credit Given</h4>
            <p className="counter">₹50 Crore</p>
          </div>
        </div>
        <div className="gold-line"></div> {/* Line between items */}
        <div className="stats-item">
          
          <div>
            <h4 className="stats-heading">Get Instant Loan up to ₹5 Lakhs</h4>
          </div>
        </div>
        <div className="gold-line"></div> {/* Line between items */}
        <div className="stats-item">
          <a href="/login" className="login-button">
            <FaSignInAlt className="icon" />
            Login
          </a>
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
    </div>
    

    
  );
};
export default PersonalLoanForDrivers;
