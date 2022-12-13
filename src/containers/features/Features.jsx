import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Becoming anti active trend',
    text: 'Dictum varius duis at consectetur. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Nunc aliquet bibendum enim facilisis gravida neque convallis a.',
  },
  {
    title: 'Improving trust instantly',
    text: 'In ornare quam viverra orci sagittis eu. In metus vulputate eu scelerisque felis. Diam vulputate ut pharetra sit. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Purus sit amet volutpat consequat mauris nunc.',
  },
  {
    title: 'Messaging Daily',
    text: 'Vel pretium lectus quam id. Sed sed risus pretium quam vulputate. Quisque id diam vel quam elementum. Purus sit amet volutpat consequat. Tempor commodo ullamcorper a lacus vestibulum sed arcu.',
  },
  {
    title: 'Using technology to your benefit',
    text: 'Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Tristique sollicitudin nibh sit amet. In pellentesque massa placerat duis ultricies lacus sed.',
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
        <p>Request Early Access to Get Started Right Away!</p>
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
