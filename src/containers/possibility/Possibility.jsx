import React from 'react';
import possibilityImage from '../../assets/possibility4.png';
import './possibility.css';

const Possibility = () => (
  <div className="rwrks__possibility section__padding" id="possibility">
    <div className="rwrks__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="rwrks__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        Possibilities beyond your wildest imagination
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odit illum
        inventore odio culpa sapiente! Fugit corrupti dignissimos modi, suscipit
        ipsa nisi quisquam sint vero ut omnis debitis, unde nemo!
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
