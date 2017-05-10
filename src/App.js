import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './containers/profile_card'
import Content from './containers/content'
import Navbar from './containers/navbar'

var description = 'A just-outside-of-the-city boy with a penchant for shorts and Java.'
var username = 'Ian Peter Greenburg'

class App extends Component {
  constructor(){
    super()
    this.state = {
      content: 'home'
    }
  }
  go(i){
    this.setState({
      content: i.target.id
    })
  }
  render() {
    return (
      <div className="App full-height">
        <Navbar
          logo={logo}
          onClick={(i) => this.go(i)}
        />
        <div className='container-fluid full-height top-padding'>
          <div className='col-md-2'>
            <ProfileCard username={username} description={description}/>
          </div>
          <div className='col-md-8'>
            <Content content={this.state.content}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
