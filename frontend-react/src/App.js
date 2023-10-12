import React from 'react';

import { About, Footer, Header, Work, Skills, Testimonial } from './container';
import { Navbar } from './components';
import './App.scss';
import Cursor from './components/cursor/Cursor';

const App = () => {
  return (
    <div className="app">
      <Cursor />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
