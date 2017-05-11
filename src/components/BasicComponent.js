import React, {Component} from 'react'
import MyFirstComponent from './MyFirstComponent'

class BasicComponent extends Component {
  render(){
    return(<div>
        Hi, I'm a Basic Component!
        <MyFirstComponent />
      </div>)
  }
}

export default BasicComponent;
