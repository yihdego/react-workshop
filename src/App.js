import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Profile Workshop</h2>
        </div>

      <div className='page'>
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
