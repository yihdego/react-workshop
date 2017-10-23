import React, {Component} from 'react'

class ProfileCard extends Component {
  render(){
    return(
      <div>
        <img src={this.props.picture} className={this.props.class}/>
        <div className="title">
          {this.props.nickname}
        </div>
        <div className="name">
           {this.props.name}
        </div>
      </div>)
  }
}

export default ProfileCard;
