import React, { Component } from 'react';
import ProfilePicture from '../images/styles-profile.png'
import './App.css';

import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Content from './components/Content'

class App extends Component {

  render() {
    const WrestlerName = "A.J. Styles";
    const WrestlerNickname = "The Phenomonal One "
    return (

      <div className="App">

        <Navbar />

      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard picture={ProfilePicture} class="smackdown-profile" name={WrestlerName} nickname={WrestlerNickname}/>
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
