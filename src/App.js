import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './containers/profile_card'
import Content from './containers/content'

var description = 'A just-outside-of-the-city boy with a penchant for shorts and Java.'
var username = 'Ian Peter Greenburg'

class App extends Component {
  render() {
    return (
      <div className="App full-height">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>React Workshop Profile Page</h4>
        </div>
        <div className='container full-height top-padding'>
          <div className='col-md-10'>
            <Content />
          </div>
          <div className='col-md-2 col-md-offset-10'>
            <ProfileCard username={username} description={description}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
