import React from 'react';
import './footer.css';
import rwrksLogo from '../../assets/logo1.png';

const Footer = () => {
  return (
    <div className="rwrks__footer section__padding">
      <div className="rwrks__footer-heading">
        <h1 className="gradient__text">
          Building a clear path to the future we know is possible.
        </h1>
      </div>
      <div className="rwrks__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="rwrks__footer-links">
        <div className="rwrks__footer-links_logo">
          <img src={rwrksLogo} alt="logo" />
          <p>191 Laurel St. New York, NY 10033,</p>
          <p>All Rights Reserved</p>
        </div>
        <div className="rwrks__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Partners</p>
          <p>Countries</p>
          <p>Sponsorships</p>
        </div>
        <div className="rwrks__footer-links_div">
          <h4>Company</h4>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Contact</p>
        </div>
        <div className="rwrks__footer-links_div">
          <h4>Get in touch</h4>
          <p>191 Laurel St. New York, NY 10033</p>
          <p>555-555555</p>
          <p>rwrks@openai.net</p>
        </div>
      </div>

      <div className="rwrks__footer-copyright">
        <p>© 2023 RWRKS. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
