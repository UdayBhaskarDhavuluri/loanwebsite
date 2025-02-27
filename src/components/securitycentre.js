import React, { useState } from 'react';
import './securitycentre.css'; // Import the corresponding CSS for styling

const SecurityCentre = () => {
  // State to handle the visibility of the content
  const [activeContent, setActiveContent] = useState(null);

  const toggleContent = (contentId) => {
    setActiveContent(activeContent === contentId ? null : contentId);
  };

  return (
    <div className="securityCenterContainer">
      <h2 className="sectionHeading">Security Centre</h2>
      
      <div className="securityBoxesContainer">
        {/* Box 1 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content1')} onMouseOut={() => toggleContent('content1')}>
          <div className="boxHeading">
            <span className="icon">🔒</span> Data Encryption
          </div>
          <div className={`boxContent ${activeContent === 'content1' ? 'show' : ''}`} id="content1">
            Data Encryption ensures that all sensitive data is encrypted both in transit and at rest to protect against unauthorized access.
          </div>
        </div>

        {/* Box 2 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content2')} onMouseOut={() => toggleContent('content2')}>
          <div className="boxHeading">
            <span className="icon">🛡️</span> Multi-Factor Authentication (MFA)
          </div>
          <div className={`boxContent ${activeContent === 'content2' ? 'show' : ''}`} id="content2">
            Multi-Factor Authentication adds an extra layer of security by requiring users to authenticate via more than one method.
          </div>
        </div>

        {/* Box 3 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content3')} onMouseOut={() => toggleContent('content3')}>
          <div className="boxHeading">
            <span className="icon">🔗</span> Secure APIs
          </div>
          <div className={`boxContent ${activeContent === 'content3' ? 'show' : ''}`} id="content3">
            Secure APIs ensure that all data exchanged with external services is encrypted and protected using authentication standards.
          </div>
        </div>

        {/* Box 4 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content4')} onMouseOut={() => toggleContent('content4')}>
          <div className="boxHeading">
            <span className="icon">🔑</span> Strong Password Policies
          </div>
          <div className={`boxContent ${activeContent === 'content4' ? 'show' : ''}`} id="content4">
            Strong password policies enforce secure password creation to reduce the risk of unauthorized account access.
          </div>
        </div>

        {/* Box 5 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content5')} onMouseOut={() => toggleContent('content5')}>
          <div className="boxHeading">
            <span className="icon">🔐</span> Data Privacy and Compliance
          </div>
          <div className={`boxContent ${activeContent === 'content5' ? 'show' : ''}`} id="content5">
            Ensures compliance with global data protection regulations such as GDPR, PCI DSS, and local privacy laws.
          </div>
        </div>

        {/* Box 6 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content6')} onMouseOut={() => toggleContent('content6')}>
          <div className="boxHeading">
            <span className="icon">🔎</span> Regular Security Audits and Penetration Testing
          </div>
          <div className={`boxContent ${activeContent === 'content6' ? 'show' : ''}`} id="content6">
            Regular audits and testing ensure vulnerabilities are detected and patched to prevent security breaches.
          </div>
        </div>

        {/* Box 7 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content7')} onMouseOut={() => toggleContent('content7')}>
          <div className="boxHeading">
            <span className="icon">🚪</span> Access Control
          </div>
          <div className={`boxContent ${activeContent === 'content7' ? 'show' : ''}`} id="content7">
            Access control ensures only authorized personnel or users have access to sensitive data, following the principle of least privilege.
          </div>
        </div>

        {/* Box 8 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content8')} onMouseOut={() => toggleContent('content8')}>
          <div className="boxHeading">
            <span className="icon">👁️</span> User Behavior Monitoring
          </div>
          <div className={`boxContent ${activeContent === 'content8' ? 'show' : ''}`} id="content8">
            User behavior monitoring tracks and flags suspicious activity, helping detect potential fraud or malicious behavior.
          </div>
        </div>

        {/* Box 9 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content9')} onMouseOut={() => toggleContent('content9')}>
          <div className="boxHeading">
            <span className="icon">📉</span> Data Minimization
          </div>
          <div className={`boxContent ${activeContent === 'content9' ? 'show' : ''}`} id="content9">
            Data minimization involves collecting only the necessary data required to complete transactions, reducing security risks.
          </div>
        </div>

        {/* Box 10 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content10')} onMouseOut={() => toggleContent('content10')}>
          <div className="boxHeading">
            <span className="icon">💸</span> Secure Loan Disbursement
          </div>
          <div className={`boxContent ${activeContent === 'content10' ? 'show' : ''}`} id="content10">
            Loan disbursements are made securely, using trusted payment gateways to ensure the transaction is protected.
          </div>
        </div>

        {/* Box 11 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content11')} onMouseOut={() => toggleContent('content11')}>
          <div className="boxHeading">
            <span className="icon">⚠️</span> Incident Response Plan
          </div>
          <div className={`boxContent ${activeContent === 'content11' ? 'show' : ''}`} id="content11">
            A defined incident response plan ensures that immediate action is taken if a security breach or data leak occurs.
          </div>
        </div>

        {/* Box 12 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content12')} onMouseOut={() => toggleContent('content12')}>
          <div className="boxHeading">
            <span className="icon">📚</span> User Education
          </div>
          <div className={`boxContent ${activeContent === 'content12' ? 'show' : ''}`} id="content12">
            Educating users on security best practices, such as identifying phishing attempts and securing personal information.
          </div>
        </div>

        {/* Box 13 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content13')} onMouseOut={() => toggleContent('content13')}>
          <div className="boxHeading">
            <span className="icon">⌛</span> Session Management
          </div>
          <div className={`boxContent ${activeContent === 'content13' ? 'show' : ''}`} id="content13">
            Session management involves securely storing and managing user sessions to prevent unauthorized access or session hijacking.
          </div>
        </div>

        {/* Box 14 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content14')} onMouseOut={() => toggleContent('content14')}>
          <div className="boxHeading">
            <span className="icon">2️⃣</span> Two-Step Verification for Loan Application
          </div>
          <div className={`boxContent ${activeContent === 'content14' ? 'show' : ''}`} id="content14">
            Implementing two-step verification for loan applications ensures that only the legitimate user can complete the process.
          </div>
        </div>

        {/* Box 15 */}
        <div className="securityBox" onMouseOver={() => toggleContent('content15')} onMouseOut={() => toggleContent('content15')}>
          <div className="boxHeading">
            <span className="icon">💾</span> Data Backup
          </div>
          <div className={`boxContent ${activeContent === 'content15' ? 'show' : ''}`} id="content15">
            Regular data backups are essential to recover information in case of a disaster, ensuring minimal downtime.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityCentre;
