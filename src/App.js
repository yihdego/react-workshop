import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './containers/profile_card'

class App extends Component {
  render() {
    return (
      <div className="App full-height">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>React Workshop Profile Page</h4>
        </div>
        <div className='container full-height'>
          <div className='col-md-2 col-md-offset-10 top-padding'>
            <ProfileCard username='Ian Peter Greenburg'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
