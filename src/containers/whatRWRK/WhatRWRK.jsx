import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatRWRK.css';

const WhatRWRK = () => (
  <div className="rwrks__whatrwrks section__margin" id="rwrks">
    <div className="rwrks__whatrwrks-feature">
      <Feature
        title="What is RWRKS"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eum, vitae eos fugit ut sit atque necessitatibus soluta maiores nisi, quas possimus exercitationem illum aperiam sint voluptate iure quae aspernatur! Ultrices gravida dictum fusce ut placerat orci. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Purus sit amet volutpat consequat mauris nunc congue nisi. Cursus risus at ultrices mi tempus imperdiet nulla. Purus non enim praesent elementum."
      />
    </div>
    <div className="rwrks__whatrwrks-heading">
      <h1 className="gradient__text">
        Any and everything you have imagined is now possible
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="rwrks__whatrwrks-container">
      <Feature
        title="Chatbots"
        text="Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Accusamus in
        voluptas rem tempora?"
      />
      <Feature
        title="Education"
        text="Nibh sed pulvinar proin gravida hendrerit. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Non arcu risus quis varius quam quisque."
      />
      <Feature
        title="Knowlegebase"
        text="Amet mauris commodo quis imperdiet massa. Sagittis eu volutpat odio facilisis. Id aliquet risus feugiat in ante metus dictum."
      />
    </div>
  </div>
);

export default WhatRWRK;
