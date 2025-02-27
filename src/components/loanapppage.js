import React, { useState } from 'react';
import './loanapppage.css';

const LoanApplicationForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="loan-form-container">
      <div className="left-container">
        <h3>Loan Features</h3>
        <div className="features-list">
          <div className="feature-box">
            <i className="icon fas fa-car"></i>
            <h2>For drivers and customers</h2>
          </div>
          <div className="feature-box">
            <i className="icon fas fa-clock"></i>
            <h2>Approval in 10 mins</h2>
          </div>
          <div className="feature-box">
            <i className="icon fas fa-paperclip"></i>
            <h2>No collaterals & 100% digital process</h2>
          </div>
          <div className="feature-box">
            <i className="icon fas fa-file-alt"></i>
            <h2>Minimum documents & no paperwork</h2>
          </div>
          <div className="feature-box">
            <i className="icon fas fa-wallet"></i>
            <h2>Instant cash in your bank account</h2>
          </div>
          <div className="feature-box">
            <i className="icon fas fa-arrow-alt-circle-right"></i>
            <h2>Options for loan extension</h2>
          </div>
          <div className="feature-box">
            <i className="icon fas fa-trophy"></i>
            <h2>Rewards for timely repayments</h2>
          </div>
          <div className="feature-box">
            <i className="icon fas fa-credit-card"></i>
            <h2>Flexible repayment options</h2>
          </div>
        </div>
      </div>

      <div className="right-container">
        <div className="mobile-input">
          <label htmlFor="mobile">Enter your mobile number:</label>
          <input type="text" id="mobile" placeholder="Mobile Number" />
        </div>
  
  
        <div className="terms-checkbox">
          <input
            type="checkbox"
            id="terms"
            width={0}
            checked={isChecked}
            onChange={handleCheckboxChange}
          /><label htmlFor="terms">
            By clicking on the "Get cash today" button above, I acknowledge that I have read and agree to the Terms and Conditions and Privacy Policy and I authorize JUSTTAP and/or its affiliates to send me Email / SMS / WhatsApp or call me at the number provided to advise me of my financial needs and for marketing purposes.By clicking the button GET LOAN TODAY! above you acknowledge that you have read and agreed on the Terms and Conditions and the Privacy policy
          I accept the <a href="/terms">Terms and Conditions</a> and <a href="/privacy">Privacy Policy</a>
        </label>
      
        </div>
    

        <button className={`otp-button ${isChecked ? 'active' : ''}`} disabled={!isChecked}>
          Get OTP
        </button>
      </div>
    </div>
  );
};

export default LoanApplicationForm;
