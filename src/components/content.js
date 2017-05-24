import React, { Component } from 'react';
import Home from '../components/home';
import About from '../components/about';
import Contact from '../components/contact';

var pages = {
  home: <Home />,
  about: <About />,
  contact: <Contact />,
};

class Content extends Component {
  render() {
    var content = pages[this.props.content];
    return (
    <div className='content'>
      {content}
    </div>
  );
  }
}

export default Content;
