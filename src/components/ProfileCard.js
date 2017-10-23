import React, {Component} from 'react'

class ProfileCard extends Component {
  render(){
    return(
      <div>
        <img src={this.props.picture} className={this.props.class}/>
      Hi, I'm where the profile card goes
      </div>)
  }
}

export default ProfileCard;
