import React, {Component} from 'react'

class Home extends Component {
  render(){
    return (
      <div>
        <div className="summary">
        {this.props.summary}
        </div>
        <ul className="content">
          {this.props.content.map(item => <li className="content-li">{item}</li>)}
        </ul>
      </div>
    )
  }
}

export default Home
