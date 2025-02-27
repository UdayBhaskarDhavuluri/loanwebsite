import React from 'react';


const containerStyle = {
  padding: '30px',
  fontFamily: 'Arial, sans-serif',
  // Prevents the image from repeating
};


const sectionStyle = {
  marginBottom: '30px',
};

const headingStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '15px',
  color:'#fff'
};

const paragraphStyle = {
  fontSize: '16px',
  lineHeight: '1.6',
  marginBottom: '10px',
  color:'#fff'
};
const termsContainer={
  backgroundColor: 'rgba(0, 0, 0, 0.75)', /* Dark semi-transparent background */
    padding: '45px',
    borderRadius: '6px',
    width: '95%',
    // boxShadow: 0 4px 20px rgba(0, 0, 0, 0.5);

    justifyContent: 'center',
    alignItems: 'center',
}

const TermsAndConditions = () => {
  return (
    <div style={containerStyle}>
      <div style= {termsContainer}>
      <h1 style={{color: '#fff'}}>Terms and Conditions</h1>

      {/* Section 1: Restrictions on Use */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>1. Restrictions on Use</h2>
        <p style={paragraphStyle}>
          The use of this loan application and services is subject to compliance with all applicable laws and regulations, including, but not limited to, the Reserve Bank of India (RBI) guidelines and other financial regulatory bodies in India.
        </p>
        <p style={paragraphStyle}>
          You are prohibited from using this application for any illegal activities, including fraud, money laundering, or any activity that violates the laws of India. Any misuse may result in suspension or termination of your account.
        </p>
        <p style={paragraphStyle}>
          We reserve the right to restrict or deny access to our services for any reason deemed necessary.
        </p>
      </div>

      {/* Section 2: Transactions */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>2. Transaction Terms</h2>
        <p style={paragraphStyle}>
          All loans and transactions facilitated through this application are subject to the terms set forth by the Reserve Bank of India (RBI) and applicable financial regulations.
        </p>
        <p style={paragraphStyle}>
          By requesting a loan, you agree to repay the loan amount as per the terms provided at the time of application, including interest rates, fees, and repayment schedules. Failure to comply with these terms may result in penalties or legal action.
        </p>
        <p style={paragraphStyle}>
          We also reserve the right to perform identity verification and credit checks before granting loans.
        </p>
      </div>

      {/* Section 3: Intellectual Property Rights */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>3. Intellectual Property Rights</h2>
        <p style={paragraphStyle}>
          All content, materials, logos, trademarks, and intellectual property associated with this loan application, including its website and mobile application, are the exclusive property of the company and protected by Indian and international copyright laws.
        </p>
        <p style={paragraphStyle}>
          You are granted a non-exclusive, non-transferable license to access and use the application for personal, non-commercial use only. Any unauthorized use or reproduction of the intellectual property is strictly prohibited.
        </p>
      </div>

      {/* Section 4: Refund and Cancellation Policy */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>4. Refund and Cancellation Policy</h2>
        <p style={paragraphStyle}>
          Loans granted through this application are non-refundable once the loan amount is disbursed to the applicant. However, if you have mistakenly applied for a loan or there was an error in processing, you must contact customer support within 24 hours of the application for any possible correction.
        </p>
        <p style={paragraphStyle}>
          If you wish to cancel a loan request before disbursement, you may do so by contacting our customer support team. Once the loan is disbursed, cancellations and refunds will not be entertained.
        </p>
        <p style={paragraphStyle}>
          For any issues related to repayments, please refer to our repayment policy, which includes specific terms for late payments or defaults.
        </p>
      </div>

      <p style={paragraphStyle}>
        By using this application, you agree to comply with all terms mentioned above, and we recommend reviewing this page periodically for any updates.
      </p>
    </div>
    </div>
  );
};

export default TermsAndConditions;
