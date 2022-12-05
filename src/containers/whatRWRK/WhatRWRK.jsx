import React from 'react';
import { Feature } from '../../components';
import './whatRWRK.css';

const WhatRWRK = () => {
  return (
    <div className="rwrks__whatrwrks section__margin" id="rwrks">
      <div className="rwrks__whatrwrks-feature">
        <Feature />
      </div>
      <div className="rwrks__whatrwkrs-heading">
        <h1 className="gradient__text">
          Everything you have imagined is now possible
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="rwrks__whatrwkrs-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

export default WhatRWRK;
