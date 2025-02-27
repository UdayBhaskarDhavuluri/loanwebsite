import React from 'react';
import './csrp.css'; // Import the CSS for styling

const CorporateSocialResponsibilityPolicy = () => {
  return (
    <div className="csr-container">
      <h1 className="csr-heading">Corporate Social Responsibility Policy</h1>
      <p className="csr-description">
        Our Corporate Social Responsibility (CSR) policy reflects our commitment to making a positive impact on society and the environment. We believe in ethical practices, sustainability, and actively contributing to the communities in which we operate.
      </p>

      <div className="csr-boxes">
        <div className="csr-box">
          <i className="icon fas fa-globe"></i>
          <h3>Environmental Responsibility</h3>
          <p>
            We are committed to minimizing our environmental footprint by adopting eco-friendly practices such as energy conservation, waste reduction, and sustainable sourcing.
          </p>
        </div>

        <div className="csr-box">
          <i className="icon fas fa-handshake"></i>
          <h3>Ethical Business Practices</h3>
          <p>
            We operate with integrity, ensuring fair treatment for all stakeholders, upholding transparency, and adhering to the highest ethical standards in our business dealings.
          </p>
        </div>

        <div className="csr-box">
          <i className="icon fas fa-users"></i>
          <h3>Community Engagement</h3>
          <p>
            We invest in local communities by supporting education, healthcare, and social welfare programs that help uplift underserved populations.
          </p>
        </div>

        <div className="csr-box">
          <i className="icon fas fa-heart"></i>
          <h3>Employee Well-being</h3>
          <p>
            We prioritize the health, safety, and well-being of our employees by providing a positive work environment and comprehensive benefits.
          </p>
        </div>

        <div className="csr-box">
          <i className="icon fas fa-chart-line"></i>
          <h3>Sustainable Growth</h3>
          <p>
            We focus on long-term sustainable growth by balancing economic, social, and environmental factors to create value for our stakeholders and society at large.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorporateSocialResponsibilityPolicy;
