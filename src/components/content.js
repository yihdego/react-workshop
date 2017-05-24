import React, { Component } from 'react';
import Home from '../components/home';
import About from '../components/about';
import Contact from '../components/contact';

class Content extends Component {
  render() {
    return (
    <div className='content'>
      <Home />
      <About />
      <Contact />
    </div>
  );
  }
}

export default Content;
