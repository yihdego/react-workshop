import React, {Component} from 'react'

class Navbar extends Component {
  render(){
    return (
      <nav className='navbar'>
        <div className="App-header">
          <div className='container'>
            <ul className='list-inline pull-left nav-list'>
              <li onClick={this.props.onClick} id='home'>Home</li>
              <li onClick={this.props.onClick} id='about'>About</li>
              <li onClick={this.props.onClick} id='contact'>Contact</li>
            </ul>
            <img src={this.props.logo} className="App-logo" alt="logo" />
            <h4>React Workshop Profile Page</h4>
          </div>
        </div>
      </nav>
      )
  }
}

export default Navbar
