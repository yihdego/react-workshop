import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './containers/profile_card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ProfileCard username='Ian Peter Greenburg'/>
      </div>
    );
  }
}

export default App;
