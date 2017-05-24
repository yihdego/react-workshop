import React, { Component } from 'react';
import './App.css';
import ProfileCard from './components/profile_card';
import Content from './components/content';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='page full-height'>
          <Navbar />
          <div className='container-fluid top-padding'>
            <div className='col-md-2'>
              <ProfileCard />
            </div>
            <div className='col-md-8'>
              <Content />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
