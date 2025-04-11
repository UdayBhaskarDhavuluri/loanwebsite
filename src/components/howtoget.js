import React from 'react';

const LoanApplicationProcess = () => {
  const handleButtonClick = () => {
    // Redirect to the loan application page
    window.location.href = "/loanapppage"; // Change the URL to your actual loan application page URL
  };

  return (
    <div style={{
      backgroundColor: 'skyblue',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    }}>
      <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px',color:'#000'}}>
        How to Apply for a Loan Online
      </h2>
      <p style={{ fontSize: '18px', marginBottom: '30px',color:'#000' }}>
        Fill out the online registration form and you can get up to 40,000 INR in your account. JustTap gives you an opportunity to take loans from reliable credit partners. To get a loan, you need to provide: any document, phone number, and bank account in your name.
      </p>

      {/* Step-by-step process */}
      <div style={{ display: 'flex', justifyContent: 'space-around', gap: '30px', marginBottom: '30px' }}>
        <div style={{ width: '30%', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>01</h3>
          <h4 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Sign up</h4>
          <p style={{ fontSize: '16px' }}>
            It takes only 5 minutes to fill out an application. Please confirm the information by authentication code (OTP) using the SMS that will be sent to you at the last step of the application form.
          </p>
        </div>

        <div style={{ width: '30%', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>02</h3>
          <h4 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Get advice</h4>
          <p style={{ fontSize: '16px' }}>
            Please wait for us to contact you for appropriate financial solution advice. We will confirm the terms, conditions, contracts & your loan needs. Then, we will send money to your account.
          </p>
        </div>

        <div style={{ width: '30%', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>03</h3>
          <h4 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Get money fast</h4>
          <p style={{ fontSize: '16px' }}>
            The money will be disbursed to your account within 24 hours after you confirm your agreement to sign contracts by SMS code.
            <br />
            You do not need to go to the bank & stand in line to get money.
          </p>
        </div>
      </div>

      {/* Convenience message */}
      <p style={{ fontSize: '18px', marginBottom: '30px' ,color:'#000'}}>
        We bring convenience to the user. JUSTTAP is always within reach: on any device connected to the network. Wherever you are, whether you're away or at home - it's easy to get loans.
      </p>

      {/* Get Loan Today Button */}
      <button
        onClick={handleButtonClick}
        style={{
          padding: '15px 30px',
          backgroundColor: '#34a853',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '18px',
          cursor: 'pointer',
          fontWeight: 'bold',
          width:'200px',
        }}
      >
        Get Loan Today
      </button>
    </div>
  );
};

export default LoanApplicationProcess;
