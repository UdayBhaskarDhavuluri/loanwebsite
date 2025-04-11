// In Home.js (or any other component file)
import React,{useState} from 'react';
import './blog.css';
import termsImage from "../loan_images/terms.jpg";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";






const Blog = () => {
  const [showTerms, setShowTerms] = useState(false); // Toggle state

  const handleToggle = () => {
    setShowTerms(!showTerms); // Toggle show/hide
  };
  const [showDetails, setShowDetails] = useState(false);
  const termsData = [
    {
      title: "Interest Rates & Fees",
      description: <p>One of the most important sections in any loan agreement is interest rates and associated fees. Loan apps may charge:

      <p>✔ High-Interest Rates – Some apps have annual percentage rates (APR) exceeding 100%, which can trap borrowers in a debt cycle.</p>
     <p> ✔ Processing Fees – A deduction made before loan disbursement.</p>
      <p>✔ Late Payment Penalties – Extra charges if you fail to repay on time.</p>
      <p>✔ Prepayment Penalty – Some apps charge a fee if you decide to clear your loan early.</p>
      
      💡 Tip: Always calculate the total cost of borrowing before accepting the loan.</p>,
      
    },
    {
      title: "Repayment Terms",
      description: <p>Loan apps specify repayment due dates, modes of payment, and penalties for late payments. Common repayment terms include:

<p>Fixed tenure (e.g., 7 days, 15 days, or 30 days).</p>
<p>Automatic deductions from your bank account or mobile wallet.</p>
<p>Higher penalties for missing payments.</p>
<p>❗ Warning: Some loan apps use aggressive collection methods, including constant calls and messages. Ensure you're comfortable with their collection policies.</p>
</p>,
      
    },
    {
      title: "Data Privacy & Permissions",
      description: <p>Most loan apps require access to personal data such as:

<p>📱 Contacts – Some apps access your phone book for debt collection purposes.</p>
<p>📷 Camera & Storage – May request access to scan documents or ID proofs.</p>
<p>📍 Location Tracking – Used to verify your residence and prevent fraud.</p>

<p>🔍 Check: If an app demands excessive permissions, it may be a red flag 🚨. Always read their privacy policy before granting access.</p></p>,
      
    },
    {
      title: "Hidden Charges & Renewals",
      description:<p>Some loan apps automatically renew loans, leading to higher interest accumulation. Watch out for:

     <p> ❌ Automatic Loan Renewals – If you fail to repay, some apps extend your loan with an additional fee.</p>
     <p>❌ Undisclosed Service Charges – Some lenders charge hidden SMS fees, account maintenance fees, or insurance charges.</p>
      
     <p>💡 Tip: Always ask for a clear breakdown of charges before accepting the loan.</p>
      
      </p>,
      
    },
    {
      title: "Legal Actions & Dispute Resolution",
      description: <p>Check the legal clauses that define:

      <p>⚖ Dispute Resolution – Where and how disputes will be handled (e.g., Arbitration vs. Court).</p>
      <p>⚖ Governing Law – The country or state’s laws governing the loan agreement.</p>
      <p>⚖ Legal Consequences for Non-Payment – Some apps report defaulters to credit bureaus, affecting future loan approvals.</p>
      
      📌 Tip: If you notice unfair clauses, avoid the app or seek legal advice.</p>,
      
    },
    {
      title: "Credit Score Impact",
      description: <p>Many loan apps report your borrowing history to credit bureaus (e.g., CIBIL, Experian, or TransUnion). This means:

     <p> ✅ Timely repayment improves your credit score.</p>
      <p>❌ Defaulting or late payments lower your credit score, making it harder to get future loans.</p>
      
     <p> 🔍 Check: Whether the app shares your data with credit agencies before borrowing.</p></p>,
      
    },
    {
      title: "Customer Support",
      description: <p>Reliable loan apps have transparent customer support channels for resolving disputes. Ensure they offer:

      <p>📞 Customer care helpline</p>
      <p> 📧 Email support</p>
      <p>📲 In-app chat assistance</p>
      
      💡 Tip: Avoid apps that lack proper support or have negative reviews about poor customer service.</p>,
      
    },
  ];

  const quickLoansData = [
    {
        icon: "✔️",
        title: "Fast Approval Process",
        description: "Online loans are processed within minutes.",
    },
    {
        icon: "✔️",
        title: "Minimal Documentation",
        description: "Basic personal and financial details required.",
    },
    {
        icon: "✔️",
        title: "Flexible Repayment Options",
        description: "Various repayment terms available.",
    },
    {
        icon: "✔️",
        title: "Small Loan Amounts",
        description: "Ideal for short-term expenses.",
    },
    {
        icon: "✔️",
        title: "Higher Interest Rates",
        description: "Due to quick disbursal.",
    },
    {
        icon: "💸",
        title: "Typical Expenses Covered",
        description: "Medical emergencies, car repairs, home repairs, utility bills, emergency travel.",
    },
    {
        icon: "⏳",
        title: "Fast Fund Transfer",
        description: "Application, approval, and fund transfer can take as little as 24 hours.",
    },
    {
        icon: "✅",
        title: "Instant Loan Advantages",
        description: "Convenience, no collateral, flexible eligibility, 24/7 availability.",
    }
];


 

  const contentSections = [
    {
      title: "Know About Short-Term Loans",
      text: "Short-term loans are small-dollar, high-interest loans meant to be repaid within a few weeks to a few months. They can be helpful for emergencies but often come with higher interest rates.",
    },
    {
      title: "How Lenders Approve You for Short-Term Online Loans?",
      text: "Lenders consider income, employment status, credit history, and debt-to-income ratio to determine your eligibility for a short-term loan.",
    },
    {
      title: "What Are the Repayment Terms for Short-Term Loans Online?",
      text: "Repayment terms vary but usually range from 2 weeks to 6 months. Interest rates are often high, and late payments can lead to extra fees.",
    },
    {
      title: "Conclusion",
      text: "Short-term loans can be beneficial if used responsibly. Always understand the terms and assess your ability to repay before borrowing.",
    },
  ];
  const [visible, setVisible] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const showNext = () => {
    if (visibleIndex < contentSections.length) {
      setVisibleIndex((prev) => prev + 1);
    }
  };
  const [showContent, setShowContent] = useState(false);
  
  return (
    
    
    <div >
    {/* Header Section */}
    <div  className="terms-container" onClick={handleToggle}>
    <div className="terms-header">
      <h2>📜 Terms and Conditions</h2>
      <img src={termsImage} alt="Terms and Conditions" className="terms-img" />
    </div>

    {/* Terms Section (Only Show When Clicked) */}
    {showTerms && (
      <div className="terms-content">
        {termsData.map((term, index) => (
          <div key={index} className="term-box">
            <i className={term.icon}></i> {/* Display the icon */}
            <div>
              <h3>{term.title}</h3>
              <p>{term.description}</p>
            </div>
          </div>
        ))}
      </div>

    )}
    </div>
    <div className="eligibility-containers">
      <div className="eligibility-card">
        <h2 className="eligibility-header">
          <FaCheckCircle className="eligibility-icon" /> Eligibility Requirements to Get Instant Rs. 1000 Loan
        </h2>
        <button 
          className="eligibility-button"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>

        {showDetails && (
          <div className="eligibility-content">
            <h3 className="eligibility-subheader">General Eligibility Criteria</h3>
            <p className="eligibility-text">Since an instant Rs. 1000 loan is short-term and unsecured, lenders have simple eligibility requirements.</p>
            <ul className="eligibility-list">
              <li><strong>Age Requirement:</strong> 18-60 years, some lenders require 21+</li>
              <li><strong>Indian Citizenship:</strong> Valid government ID required</li>
              <li><strong>Income Source:</strong> Must have a consistent source of income</li>
              <li><strong>Bank Account & Mobile Number:</strong> Needed for loan disbursal and OTP validation</li>
              <li><strong>Credit Score:</strong> Not always necessary, but can help</li>
            </ul>

            <h3 className="eligibility-subheader">Other Factors Impacting Loan Approval</h3>
            <ul className="eligibility-list">
              <li>1.Loan Repayment History affects approval chances</li>
              <li>2.Existing outstanding loans are considered</li>
              <li>3.Higher amounts require stricter eligibility checks</li>
              <li>4.Work Stability is preferred by lenders</li>
            </ul>

            <h3 className="eligibility-subheader">Tips to Increase Approval Chances</h3>
            <ul className="eligibility-list">
              <li>1.Ensure a steady income source</li>
              <li>2.Apply with a trusted lender</li>
              <li>3.Verify documents are valid</li>
              <li>4.Maintain a healthy credit score</li>
              <li>5.Don’t apply for multiple loans simultaneously</li>
            </ul>

            <h3 className="eligibility-subheader">Conclusion</h3>
            <p className="eligibility-text">
              An instant Rs. 1000 loan is a quick solution for financial emergencies. By maintaining a steady income,
              good repayment history, and valid documents, you can improve your chances of approval.
            </p>
          </div>
        )}
      </div>
    </div>
    <div className="loan-info-container" onClick={() => setVisible(true)}>
      <h2 className="loan-info-header">What Should You Know Before Applying for Short-Term Loans Online?</h2>
      {visible && (
        <div className="loan-info-content">
          {contentSections.slice(0, visibleIndex).map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="loan-info-box"
            >
              <div className="loan-info-text">
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
      {visible && visibleIndex < contentSections.length && (
        <div className="loan-info-button-container">
          <button onClick={showNext} className="loan-info-button">
            Show More <ChevronDown size={16} />
          </button>
        </div>
      )}
    </div>
    <div className="quick-loans-container" onClick={() => setShowContent(!showContent)}>
            <div className="quick-loans-header">
                <h2>📜 Quick Loans Online</h2>
            </div>
            {showContent && (
                <div className="quick-loans-content">
                    {quickLoansData.map((item, index) => (
                        <div key={index} className="quick-loans-box">
                            <i className={item.icon}></i>
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
  </div>
  

  
  );
};

export default Blog;  // Default export
