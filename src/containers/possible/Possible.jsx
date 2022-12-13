import React from 'react';
import possibilityImage from '../../assets/possibility4.png';
import './possible.css';

const Possible = () => {
  return (
    <div className="rwrks__posibility section__padding" id="possibility">
      <div className="rwrks__possibility-image">
        <img src={possibilityImage} alt="possibility"></img>
      </div>
    </div>
  );
};

export default Possible;
