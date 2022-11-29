import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai1.png';

const Header = () => {
  return (
    <div className="rwrks__header section__padding" id="home">
      <div className="rwrks__header-content">
        <h1 className="gradient__text">
          Build your "Dream Project" with the use of RWRKS OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
          minima accusamus eveniet quaerat sed eligendi, nesciunt nihil aliquid
          id iusto est. Sunt, eaque ad quis eligendi suscipit quibusdam odio
          pariatur.
        </p>
        <div className="rwrks__header-content__input">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="rwrks__header-content__people">
          <img src={people} alt="people" />
          <p>1,200 people have requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="rwrks__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
