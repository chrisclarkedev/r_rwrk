import React from 'react';
import {
  Footer,
  Blog,
  Possible,
  Feature,
  WhatRWRK,
  Header,
} from './containers';

import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatRWRK />
    <Feature />
    <Possible />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;
