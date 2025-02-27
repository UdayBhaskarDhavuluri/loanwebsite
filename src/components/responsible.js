import React from 'react';
import './responsible.css';  // Import the CSS file for styling
import liked16 from '../loan_images/liked16.jpg';

const ResponsibleLending = () => {
  return (
    <div className="responsible-lending-container">
      {/* Content Section */}
      <div className="content">
        <h2>What is Responsible Lending?</h2>
        <p><strong>February 22 , 2025</strong></p>
        <p>Sustainable Development is at the forefront of the national agenda, influencing Banks and NBFCs to foster ESG-based responsible lending. This directs them towards funding sustainable projects based on Environment, Social, and Governance aspects and also invites a change in the ecosystem to benefit those following ESG practices.</p>

        <p>Banks in India are now turning their focus towards Environmental, Social, and Governance-based lending while investing in projects ranging around wind energy, hydropower, and solar energy and contributing towards social development projects. This concept gives a new purview to the Banks, NBFCs, or financial institutions and makes them take more interest in funding organizations working towards these areas.</p>

        <p>This enables Banks or NBFCs to not only invest in ESG-based projects but also to offer loans to organizations through ESG metrics which could be beneficial in terms of sustainability development.</p>

        <h3>Understanding ESG Linked Loans</h3>
        <p>The ESG-linked loans focus on the Environment, Social, and Governance aspects or performance of the borrower. This is becoming a new norm in the industry as it not only fosters organizations to be responsible towards environmental, social, or government-related efforts but also to avail greater benefits like lower interest rates on various types of loans. On the other hand, this overall promotes sustainability development and social responsibility in the long run.</p>

        <p>In ESG Linked Loans, the financial terms of the loan are linked with the ESG performance, like workplace diversity score and contribution to green energy projects or social initiatives. These can be tracked through diverse metrics like Sustainability Performance Targets and Key Performance Indicators laid down by the banks.</p>

        <h3>Role of Banks and Financial Institutions to Promote Sustainability</h3>
        <p>As per the Reserve Bank of India, it is important to link Development with the financial system, largely supporting sustainable practices and initiatives in the country. This not only makes financial institutions more responsible and society-centric but also enables other organizations seeking funds to work in areas related to ESG as it might offer them some lucrative benefits while availing loans. In both ways, this concept enables sustainable Development.</p>

        <h3>ESG Strategies Link to Higher ROI</h3>
        <p>The companies following ESG practices are seen to be more return-oriented, thus offering better returns to investors or lenders. Since ESG accesses the business processes in terms of dealing with their stakeholders, these companies are giving better equity returns in different aspects.</p>

        <h3>Why ESG-Based Responsible Lending is Positive for Banks or NBFCs</h3>
        <ul>
          <li>ESG Based Responsible Lending reduces the risk for financial institutions to lend money to the organizations following sustainability practices.</li>
          <li>ESG Linked Investments for NBFCs or Banks also improve their reputation in the market or industry. This, in turn, improves the funding ecosystem.</li>
          <li>It opens up opportunities to diversify investments in new markets linked with sustainable Development and social projects. This can increase the demand for funding for Social Enterprises.</li>
        </ul>

        <h3>Way forward for ESG Based Lending in India</h3>
        <p>The Reserve Bank of India has already intimated the interest in laying down rules and regulations governing ESG-based lending, which will give a roadmap and direction to banks and NBFCs to follow norms and offer benefits while funding sustainability projects linked with ESG metrics.</p>
      </div>

      {/* Image Section */}
      <div className="image-container">
        <img src={liked16} alt="Responsible Lending" className="responsible-image" />
      </div>
    </div>
  );
};

export default ResponsibleLending;
