import React, { useState } from 'react';

// CorporateInfo component
const CorporateInfo = () => {
  // State to manage the visibility of each box
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle box toggle
  const toggleBox = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active box
  };

  const loanDetails = [
    { title: 'Loan Types', content: 'Corporate loans can be categorized into various types such as term loans, working capital loans, and revolving credit lines.' },
    { title: 'Loan Terms', content: 'Corporate loans typically have longer repayment periods compared to personal loans, ranging from 1 to 10 years.' },
    { title: 'Interest Rates', content: 'Interest rates for corporate loans are often determined based on the company’s creditworthiness, industry, and market conditions.' },
    { title: 'Collateral', content: 'Most corporate loans require collateral, such as real estate or inventory, to secure the loan.' },
    { title: 'Credit Assessment', content: 'Lenders assess the creditworthiness of the company through financial statements, credit scores, and business history.' },
    { title: 'Loan Syndication', content: 'For larger loan amounts, banks may form syndicates, where multiple lenders share the risk and pool resources to provide the loan.' },
    { title: 'Debt-to-Equity Ratio', content: 'A key factor lenders consider when offering corporate loans is the company’s debt-to-equity ratio, which helps determine financial stability.' },
    { title: 'Covenants', content: 'Corporate loans often include covenants or conditions, such as financial performance targets or restrictions on additional borrowing.' },
    { title: 'Loan Default', content: 'Defaulting on a corporate loan can lead to serious consequences such as asset seizure, legal action, or bankruptcy proceedings.' },
    { title: 'Corporate Loan Application', content: 'Companies must provide detailed financial documentation and a solid business plan to apply for corporate loans.' },
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Corporate Information</h2>
      <div style={listStyle}>
        {loanDetails.map((detail, index) => (
          <div key={index} style={boxStyle}>
            <div onClick={() => toggleBox(index)} style={headerStyle}>
              <strong>{index + 1}. {detail.title}</strong>
            </div>
            {activeIndex === index && (
              <div style={contentStyle}>
                {detail.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Styling
const containerStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  maxWidth: '1400',
  margin: '20px auto',
  textAlign: 'center',
};

const headingStyle = {
  color: 'white',
  textAlign: 'center',
  marginBottom: '30px',
};

const listStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
  fontSize: '18px',
  textAlign: 'left',
  margin: '0 auto',
  maxWidth: '1000px',
  color: 'white',
};

const boxStyle = {
  backgroundColor: '#222',
  marginBottom: '10px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.15)',
};

const headerStyle = {
  backgroundColor: '#2980b9',
  color: 'white',
  padding: '15px',
  fontSize: '20px',
  fontWeight: 'bold',
  cursor: 'pointer',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
};

const contentStyle = {
  backgroundColor: '#ecf0f1',
  padding: '15px',
  fontSize: '16px',
  color: '#2c3e50',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
};

export default CorporateInfo;
