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
    const WrestlerSummary = "Allen Neal Jones (born June 2, 1977), best known by the ring name AJ Styles (also stylized as A.J. Styles), is an American professional wrestler who is signed to WWE performing on the SmackDown brand. He has long been regarded as one of the world's best professional wrestlers."
    const Promotions = ["Ring of Honor (2002–2004, 2014-2016)", "Total Nonstop Action Wrestling (2002-2013)", "New Japan Pro Wrestling (2014-2016)", "WWE (2016-Present)"]
    return (

      <div className="App">

        <Navbar />

      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard picture={ProfilePicture} class="smackdown-profile" name={WrestlerName} nickname={WrestlerNickname}/>
          </div>
          <div className='col-md-8'>
            <Content summary={WrestlerSummary} promotions={Promotions}/>
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
