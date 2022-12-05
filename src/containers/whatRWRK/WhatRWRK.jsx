import React from 'react';
import { Feature } from '../../components';
import './whatRWRK.css';

const WhatRWRK = () => {
  return (
    <div className="rwrks__whatrwrks section__margin" id="rwrks">
      <div className="rwrks__whatrwrks-feature">
        <Feature
          title="What is RWRKS"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et, adipisci rerum nesciunt debitis itaque harum modi aperiam nihil fugiat unde, nulla asperiores sit minus perspiciatis dolores. Aliquam, quas ipsam?"
        />
      </div>
      <div className="rwrks__whatrwkrs-heading">
        <h1 className="gradient__text">
          Any and everything you have imagined is now possible
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="rwrks__whatrwkrs-container">
        <Feature
          title="Chatbots"
          // text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          // text="Nibh sed pulvinar proin gravida hendrerit. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Non arcu risus quis varius quam quisque. "
        />
        <Feature
          title="Eduation"
          // text="Amet mauris commodo quis imperdiet massa. Sagittis eu volutpat odio facilisis. Id aliquet risus feugiat in ante metus dictum. "
        />
      </div>
    </div>
  );
};

export default WhatRWRK;
