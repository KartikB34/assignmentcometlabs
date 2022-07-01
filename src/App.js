import React from 'react';

import { Footer, Blog, Features, Reviews, WhatGPT3, Header, Templates } from './Containers';
import {  Navbar } from './Components';

//Blog => About;

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatGPT3 />
    <Reviews />
    <Features />
    <Blog />
    <Templates />
    <Footer />
  </div>
);

export default App;