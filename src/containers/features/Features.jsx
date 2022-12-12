import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Becoming the active trend',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate praesentium aliquam et porro quidem. Nesciunt cum debitis sequi tempore incidunt, quod cumque delectus inventore, animi voluptatem quia ipsa quas quaerat?',
  },
  {
    title: 'Improving trust instantly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate praesentium aliquam et porro quidem. Nesciunt cum debitis sequi tempore incidunt, quod cumque delectus inventore, animi voluptatem quia ipsa quas quaerat?',
  },
  {
    title: 'Messaging Daily',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate praesentium aliquam et porro quidem. Nesciunt cum debitis sequi tempore incidunt, quod cumque delectus inventore, animi voluptatem quia ipsa quas quaerat?',
  },
  {
    title: 'Using technology to your benefit',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate praesentium aliquam et porro quidem. Nesciunt cum debitis sequi tempore incidunt, quod cumque delectus inventore, animi voluptatem quia ipsa quas quaerat?',
  },
];

const Features = () => {
  return (
    <div className="rwrks__features section__padding" id="features">
      <div className="rwrks__features-heading">
        <h1 className="gradient__text">
          Future is Now You Just Need To Realize It. Step into the Future Today,
          Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="rwrks__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
