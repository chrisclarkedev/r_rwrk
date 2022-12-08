import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatRWRK.css';

const WhatRWRK = () => (
  <div className="rwrks__whatrwrks section__margin" id="rwrks">
    <div className="rwrks__whatrwrks-feature">
      <Feature
        title="What is RWRKS"
        // text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
      <p>
        We so opinion friends me message as delight. Whole front do of plate
        heard oh ought. His defective nor convinced residence own. Connection
        has put impossible own apartments boisterous. At jointure ladyship an
        insisted so humanity he. Friendly bachelor entrance to on by. Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Accusamus in
        voluptas rem tempora? Id modi quaerat dignissimos ducimus. Soluta alias
        officiis consectetur officia distinctio fugiat architecto nulla
        molestias ipsa labore.
      </p>
    </div>
    <div className="rwrks__whatrwrks-heading">
      <h1 className="gradient__text">
        Any and everything you have imagined is now possible
      </h1>
      <p>Explore the library</p>
    </div>
    <div className="rwrks__whatrwrks-container">
      <Feature
        title="Chatbots"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />
      <Feature
        title="Education"
        text="Nibh sed pulvinar proin gravida hendrerit. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Non arcu risus quis varius quam quisque."
      />
      <Feature
        title="Knowledgebase"
        text="Amet mauris commodo quis imperdiet massa. Sagittis eu volutpat odio facilisis. Id aliquet risus feugiat in ante metus dictum."
      />
    </div>
  </div>
);
export default WhatRWRK;
