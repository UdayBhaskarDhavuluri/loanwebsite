import React from 'react';
import './App.css';
import Footer from './components/footer'; // Capitalized to 'Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Updated imports
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about us';
import Blog from './components/blog'; 
import Contact from './components/contact us';
import HowToGet from './components/howtoget';
import FAQ from './components/faq';
import Login from './components/login';
import TermsAndConditions from './components/termsandconditions';
import PrivacyPolicy from './components/privacypolicy';
import BusinessLoan from './components/businessloan';
import LoanApplicationForm from './components/loanapppage';
import CorporateInfo from './components/corporateinfo';
import FlexiPersonal from './components/flexipersonal';
import CorporateSocialResponsibilityPolicy from './components/csrp';
import ResponsibleLending from './components/responsible';
import InstantPersonal from './components/instantpersonal';
import PersonalCustomers from './components/personalcustomers';
import PersonalDrivers from './components/personaldrivers';
import SecurityCentre from './components/securitycentre';




function App() {
  return (
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <Navbar /> {/* Navbar component */}
      
      <div className="App">
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} /> {/* Use element prop */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/how-to-get" element={<HowToGet />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/business-loan" element={<BusinessLoan />} />
          <Route path="/loanapppage" element={<LoanApplicationForm />} />
          <Route path="/corporate-info" element={<CorporateInfo />} />
          <Route path="/flexi-personal-loan" element={<FlexiPersonal />} />
          <Route path="/csr" element={<CorporateSocialResponsibilityPolicy />} />
          <Route path="/responsible-lending" element={<ResponsibleLending />} />
          <Route path="/instant-personal-loan-app" element={<InstantPersonal />} />
          <Route path="/personal-loan-for-customers" element={<PersonalCustomers />} />
          <Route path="/personal-loan-for-drivers" element={<PersonalDrivers />} />
          <Route path="/security" element={<SecurityCentre />} />
        </Routes>
        
      </div>

      <Footer /> {/* Use the Footer component here */}
    </BrowserRouter>
  );
}

export default App;
