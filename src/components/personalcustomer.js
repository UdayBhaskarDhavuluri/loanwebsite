import React, { useState } from "react";
import {  FaRupeeSign } from "react-icons/fa";
import {
  FaGlobe,  FaClock, FaFileAlt, FaPercentage,
  FaCheckCircle, FaMoneyBillWave, FaCalendarCheck, FaChartLine
} from "react-icons/fa";
import {
  FaPlane, FaRing, FaGift, FaGraduationCap, FaHeartbeat, FaShoppingCart,
  FaCalendarAlt, FaBaby, FaHome, FaWallet, FaPaintBrush, FaLightbulb, FaBirthdayCake, FaBriefcase,  FaIdCard,
  FaCamera, FaAddressCard, FaBuilding, FaUniversity, FaFileInvoiceDollar, FaMobileAlt, FaEnvelope, FaUser, FaVenusMars,
  FaMapMarkerAlt, FaUsers, FaCreditCard,FaArrowLeft, FaArrowRight, FaQuoteLeft
} from "react-icons/fa";



import "./personalcustomer.css"; // Create this CSS file for styling

const PersonalLoanForCustomers = () => {
  const [isChecked, setIsChecked] = useState(false);
   const [imageUrl,setImageUrl] = useState('');

 
  const purposes = [
    { icon: <FaPlane />, title: "Travel" },
    { icon: <FaRing />, title: "Wedding" },
    { icon: <FaGift />, title: "Gifting" },
    { icon: <FaGraduationCap />, title: "Education" },
    { icon: <FaHeartbeat />, title: "Emergency" },
    { icon: <FaShoppingCart />, title: "Shopping" },
    { icon: <FaCalendarAlt />, title: "Occasion" },
    { icon: <FaBaby />, title: "Maternity" },
    { icon: <FaHome />, title: "Home Renovation" },
    { icon: <FaWallet />, title: "Low Salary" },
    { icon: <FaPaintBrush />, title: "Hobbies" },
    { icon: <FaLightbulb />, title: "Opportunity"} ];
  
const features = [
  { icon: <FaGlobe />, title: "100% Online Application Process", desc: "Apply for a loan anytime, anywhere with ease." },
  { icon: <FaRupeeSign />, title: "Flexible Loan Amounts", desc: "Choose loan amounts that fit your needs." },
  { icon: <FaClock />, title: "Available 24*7", desc: "Get instant loan services at any time of the day." },
  { icon: <FaFileAlt />, title: "Stress-Free Documentation", desc: "Minimal paperwork required for hassle-free processing." },
  { icon: <FaPercentage />, title: "Attractive Interest Rates", desc: "Competitive interest rates to suit your budget." },
  { icon: <FaCheckCircle />, title: "Loan Approval in Minutes", desc: "Quick loan approval process without long waiting times." },
  { icon: <FaMoneyBillWave />, title: "Low Processing Fee", desc: "Transparent and minimal processing fees." },
  { icon: <FaCalendarCheck />, title: "Flexible Repayment Tenure", desc: "Choose repayment plans that suit your financial goals." },
  { icon: <FaChartLine />, title: "Loan Based on Target Completion", desc: "Get loans based on your progress and completion rates." }
];

const eligibilityCriteria = [
  { icon: <FaUser />, text: "Indian Citizen" },
  { icon: <FaBirthdayCake />, text: "Age above 21 years" },
  { icon: <FaBriefcase />, text: "Active employee with regular/permanent status" },
  { icon: <FaMoneyBillWave />, text: "Minimum monthly salary of ₹10,000" },
  { icon: <FaUniversity />, text: "Minimum monthly household income of ₹25,000" },
  { icon: <FaBuilding />, text: "Must and should complete the target rides" },
  { icon: <FaIdCard />, text: "Possess Govt-approved Identity & Address Proof" },
  { icon: <FaMobileAlt />, text: "Aadhaar-linked mobile number" }
];

const documentsRequired = [
  { icon: <FaCamera />, text: "Photograph" },
  { icon: <FaIdCard />, text: "PAN" },
  { icon: <FaAddressCard />, text: "Address Proof (Permanent & Current)" },
  { icon: <FaBriefcase />, text: "customer Proof (customer ID / UAN)" },
  { icon: <FaFileInvoiceDollar />, text: "Income Proof (Bank Statement of Salary Account)" }
];

const requirementsLeft = [
  { icon: <FaMobileAlt />, text: "Mobile Number" },
  { icon: <FaEnvelope />, text: "Email" },
  { icon: <FaUser />, text: "First & Last Name" },
  { icon: <FaBirthdayCake />, text: "Date of Birth" },
  { icon: <FaVenusMars />, text: "Gender" },
  { icon: <FaIdCard />, text: "PAN" },
  { icon: <FaBriefcase />, text: "Employment Type" },
  { icon: <FaMoneyBillWave />, text: "Monthly Income" },
  { icon: <FaBuilding />, text: "Company Name" },
  { icon: <FaMapMarkerAlt />, text: "Current Address" },
  { icon: <FaUniversity />, text: "Education" }
];

const requirementsRight = [
  { icon: <FaMapMarkerAlt />, text: "Permanent Address" },
  { icon: <FaUsers />, text: "Marital Status" },
  { icon: <FaFileInvoiceDollar />, text: "Income Proof (Bank Statement)" },
  { icon: <FaBriefcase />, text: "Employment Proof (Salary Slip / Office ID/UAN)" },
  { icon: <FaUser />, text: "Father/Mother/Spouse Name" },
  { icon: <FaUsers />, text: "Reference Contact" },
  { icon: <FaCreditCard />, text: "Disbursement Bank Account Details" },
  { icon: <FaUniversity />, text: "eNACH/UPI e-mandate" },
  { icon: <FaCamera />, text: "PAN Photo" },
  { icon: <FaCamera />, text: "Selfie" },
  { icon: <FaIdCard />, text: "Address Proof" }
];

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
    <div>
    <div className="loan-container">
      {/* Left Side: Information Section */}
      <div className="loan-info">
        <h2 style={{color:"#fff"}}>Personal Loan for Customers</h2>
        <p style={{color:"#fff"}}>
        With JustTap, you can quickly get the personal loan you need to fuel your financial growth. Enjoy a seamless, hassle-free loan application process that gets you funds within no time!

Whether you're starting a new financial journey or expanding your existing one, our personal loan options are designed to meet your needs. Apply for up to ₹4 Lakhs with flexible repayment options. Designed specifically for small and medium enterprises (SMEs), JustTap's personal loans empower entrepreneurs like you to achieve your goals. Whether it's starting a new carrier, expanding your expenses, or managing everyday expenses, a personal loan for growth is perfect for such uses. Get a hassle-free personal loan from ₹1,000 to ₹4 Lakhs directly into your bank account. Simply keep your PAN card, Aadhaar card, and  or income proof handy when applying. Choose a repayment tenure that suits your cash flow, ranging from 3 to 24 months. Apply now and let JustTap be your partner in success.
        </p>
      </div>

      {/* Right Side: Form Section */}
      <div className="loan-form">
        <h3>Need More Details?</h3>
        <form>
          <div className="form-group">
            
            <input type="text" placeholder="Enter First Name" required />
          </div>

          <div className="form-group">
            
            <input type="text" placeholder="Enter Last Name" required />
          </div>

          <div className="form-group">
            
            <input type="tel" placeholder="Enter Mobile Number" required />
          </div>

          <div className="form-group">
            
            <input type="number" placeholder="Enter Loan Amount" max="10000" required />
          </div>

          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="termsCheckbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="termsCheckbox">
              *By continuing, you agree to{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>{" "}
              and receive communication from JustTap via SMS, E-Mail, and WhatsApp.
            </label>
          </div>

          <button type="submit" disabled={!isChecked} className="submit-btn">
            Submit
          </button>
        </form>
        </div>
        </div>
        
    
    <div className="features-container">
      <h2>Features & Benefits of JustTap Loan for Customers</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-box">
            <div  className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
    
    <div className="purposes-container">
      <h2>Purposes & Uses</h2>
      <div className="purposes-grid">
        {purposes.map((purpose, index) => (
          <div key={index} className="purpose-box">
            <div className="purpose-icon">{purpose.icon}</div>
            <h3>{purpose.title}</h3>
          </div>
        ))}
      </div>
    </div>

    <div className="eligibility-container">
      <h2 style={{textAlign:'center',textDecoration:'bold'}}>Eligibility and Documentation for Instant Online Personal Loans</h2>
      <p className="description">
        The eligibility criteria for a loan are based on preset factors below along with necessary documents.
      </p>
      
      <div className="eligibility-grid">
        {/* Left Section - Eligibility Criteria */}
        <div className="eligibility-box">
          <h3>Eligibility Criteria</h3>
          <div>
          <ul>
            {eligibilityCriteria.map((item, index) => (
              <li key={index}>
                <span className="icon">{item.icon}</span> {item.text}
              </li>
            ))}
          </ul>
          </div>
        </div>

        {/* Right Section - Documents Required */}
        <div className="eligibility-box">
          <h3>Documents Required</h3>
          <ul>
            {documentsRequired.map((item, index) => (
              <li key={index}>
                <span className="icon">{item.icon}</span> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

     <div className="requirements-container">
      <h2>Application Requirements</h2>
      <p className="description">
        Below are the necessary details and documents required to complete your application.
      </p>
      
      <div className="requirements-grid">
        {/* Left Section */}
        <div className="requirements-box">
          <h3>Personal & Employment Details</h3>
          <ul>
            {requirementsLeft.map((item, index) => (
              <li key={index}>
                <span className="icon">{item.icon}</span> {item.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="requirements-box">
          <h3>Address & Financial Details</h3>
          <ul>
            {requirementsRight.map((item, index) => (
              <li key={index}>
                <span className="icon">{item.icon}</span> {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    {/* how to apply */}
<div className="how-to-apply-container">
  <h2>How to Apply for JustTap Customers Loan?</h2>
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
    
   
    </div>
    
    
  );
};

export default PersonalLoanForCustomers;
