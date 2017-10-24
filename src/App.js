import React, { Component } from 'react';
import ProfilePicture from '../images/styles-profile.png'
import './App.css';

import Navbar from './containers/Navbar'
import ProfileCard from './components/ProfileCard'
import Home from './components/Home'
import Moves from './components/Moves'


class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'home'
    }
  }

  clicker(event) {
    this.setState({
      page: event.target.id
    });
  }

  render() {

    const WrestlerName = "A.J. Styles";
    const WrestlerNickname = "The Phenomonal One "
    const WrestlerSummary = "Allen Neal Jones (born June 2, 1977), best known by the ring name AJ Styles (also stylized as A.J. Styles), is an American professional wrestler who is signed to WWE performing on the SmackDown brand. He has long been regarded as one of the world's best professional wrestlers."
    const Promotions = ["Ring of Honor (2002–2004, 2014-2016)", "Total Nonstop Action Wrestling (2002-2013)", "New Japan Pro Wrestling (2014-2016)", "WWE (2016-Present)"]
    const MovesSummary = "Known as a kinetic wrestler, A.J. Styles has the most reconizable wrestling moves set that utilizes agility, strength and aspects of the ring."
    const MoveSet = [" Calf Crusher 2013–present", "Figure-four leglock 2009–2010; adopted from Ric Flair", "Phenomenal Forearm 1998–2016", "Styles Clash 2002–present"]

    let stuff = [];
    if (this.state.page === 'home') {
      stuff = <Home summary={WrestlerSummary} content={Promotions}/>
    } else if (this.state.page === 'moves') {
      stuff = <Moves summary={MovesSummary} content={MoveSet}/>
    }

    return (

      <div className="App">

        <Navbar onClick={ (event) => this.clicker(event) } />

      <div className='page'>
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard picture={ProfilePicture} class="smackdown-profile" name={WrestlerName} nickname={WrestlerNickname}/>
          </div>
          <div>
            {stuff}
          </div>

        </div>
      </div>

      </div>
    );
  }
}

export default App;
