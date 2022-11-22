import React from 'react';
import {
  Footer,
  Blog,
  Possible,
  Features,
  WhatRWRK,
  Header,
} from './containers';
import { CTA, Brand, Navbar } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatRWRK />
      <Features />
      <Possible />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
