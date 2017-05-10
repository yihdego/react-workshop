import React, {Component} from 'react'

class Navbar extends Component {
  render(){
    return (
      <nav className='navbar'>
        <div className="App-header">
          <img src={this.props.logo} className="App-logo" alt="logo" />
          <h4>React Workshop Profile Page</h4>
        </div>
      </nav>
      )
  }
}

export default Navbar
