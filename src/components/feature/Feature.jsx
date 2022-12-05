import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className="rwrks__features-container__feature">
      <div className="rwrks__features-container__feature-title">
        <h1>{title}</h1>
      </div>
      <div className="rwrks__features-container_feature-text">{text}</div>
    </div>
  );
};

export default Feature;
