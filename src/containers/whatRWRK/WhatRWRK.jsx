import React from 'react';
import { Feature } from '../../components';
import './whatRWRK.css';

const WhatRWRK = () => {
  return (
    <div className="rwrks__whatrwrks section__margin" id="rwrks">
      <div className="rwrks__whatrwrks-feature">
        <Feature
          title="Why isnt this working"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et, adipisci rerum nesciunt debitis itaque harum modi aperiam nihil fugiat unde, nulla asperiores sit minus perspiciatis dolores. Aliquam, quas ipsam?"
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
          text="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <Feature
          title="Knowledgebase"
          text="Nibh sed pulvinar proin gravida hendrerit. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Non arcu risus quis varius quam quisque. "
        />
        <Feature
          title="Eduation"
          text="Amet mauris commodo quis imperdiet massa. Sagittis eu volutpat odio facilisis. Id aliquet risus feugiat in ante metus dictum. "
        />
      </div>
    </div>
  );
};

export default WhatRWRK;
