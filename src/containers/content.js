import React, {Component} from 'react'
import Home from '../components/home'
import About from '../components/about'
import Contact from '../components/contact'

class Content extends Component {
  constructor(){
    super();
    this.state = {
      content: <Home />
    }
  }
  render(){
    return (
      <div className='content'>
        {this.state.content}
      </div>
      )
  }
}

export default Content
