import React, { useState } from 'react';

// FAQ component
const FAQ = () => {
  // State to manage the visibility of each answer
  const [openQuestion, setOpenQuestion] = useState(null);

  // Function to toggle the visibility of an answer
  const toggleAnswer = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  // Function to handle button click (redirect to JustTap app)
  const handleButtonClick = () => {
    // Replace this URL with the link to the JustTap app (or a specific landing page)
    window.location.href = 'https://www.justtap.com'; // or 'justtap://app' for a custom app link
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#f9f9f9' , justifyContent:'center',alignItems:'center'}}>
      <div style={{backgroundColor:'skyblue', padding: 20}}>
      <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#333' }}>Frequently Asked Questions</h2>
      <h4 style={{ textAlign: 'center', fontSize: '24px', color: '#333', marginTop: '20px' }}>
        Ask A Question?
      </h4>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Question 1 */}
        <div
          onClick={() => toggleAnswer(1)}
          style={{
            marginBottom: '20px',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '20px', color: '#333' }}>How can I start borrowing money using JustTap?</h3>
            <span style={{ fontSize: '18px', color: '#333' }}>{openQuestion === 1 ? '▲' : '▼'}</span>
          </div>
          {openQuestion === 1 && (
            <p style={{ fontSize: '16px', color: '#555', marginTop: '10px' }}>
              To start borrowing money using JustTap, you need to sign up on the platform, complete your KYC, and
              submit your loan request. Once approved, the funds will be transferred to your bank account.
            </p>
          )}
        </div>

        {/* Question 2 */}
        <div
          onClick={() => toggleAnswer(2)}
          style={{
            marginBottom: '20px',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '20px', color: '#333' }}>Will I get money in cash when I borrow from JustTap?</h3>
            <span style={{ fontSize: '18px', color: '#333' }}>{openQuestion === 2 ? '▲' : '▼'}</span>
          </div>
          {openQuestion === 2 && (
            <p style={{ fontSize: '16px', color: '#555', marginTop: '10px' }}>
              No, JustTap only transfers the loan amount directly to your bank account via NEFT/IMPS.
            </p>
          )}
        </div>

        {/* Question 3 */}
        <div
          onClick={() => toggleAnswer(3)}
          style={{
            marginBottom: '20px',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '20px', color: '#333' }}>Do I need to have a credit history and credit score to be able to borrow on JustTap?</h3>
            <span style={{ fontSize: '18px', color: '#333' }}>{openQuestion === 3 ? '▲' : '▼'}</span>
          </div>
          {openQuestion === 3 && (
            <p style={{ fontSize: '16px', color: '#555', marginTop: '10px' }}>
              No, JustTap does not require a credit history or credit score. The platform uses alternative methods to assess
              your eligibility based on your income and other parameters.
            </p>
          )}
        </div>

        {/* Question 4 */}
        <div
          onClick={() => toggleAnswer(4)}
          style={{
            marginBottom: '20px',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '20px', color: '#333' }}>How often can I borrow on JustTap?</h3>
            <span style={{ fontSize: '18px', color: '#333' }}>{openQuestion === 4 ? '▲' : '▼'}</span>
          </div>
          {openQuestion === 4 && (
            <p style={{ fontSize: '16px', color: '#555', marginTop: '10px' }}>
              You can borrow on JustTap as often as needed, provided that you repay your previous loan in full and meet
              the eligibility criteria for each new loan.
            </p>
          )}
        </div>

        {/* Question 5 */}
        <div
          onClick={() => toggleAnswer(5)}
          style={{
            marginBottom: '20px',
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '20px', color: '#333' }}>How can I return or repay a loan on JustTap?</h3>
            <span style={{ fontSize: '18px', color: '#333' }}>{openQuestion === 5 ? '▲' : '▼'}</span>
          </div>
          {openQuestion === 5 && (
            <p style={{ fontSize: '16px', color: '#555', marginTop: '10px' }}>
              You can repay the loan on the JustTap app or website through available payment methods such as bank transfer
              or debit card.
            </p>
          )}
        </div>
      </div>

      {/* Stylish Button Container */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <button
          onClick={handleButtonClick}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s',
          }}
        >
          Go to JustTap App
        </button>
      </div>
    </div>
    </div>
  );
};

export default FAQ;
