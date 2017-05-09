import React, {Component} from 'react'
import ProfilePicture from '../components/profile_picture'
import ProfileAbout from '../components/profile_about'


class ProfileCard extends Component {
  render(){
    return (
      <div className='card'>
        <ProfilePicture />
        <h2>{this.props.username}</h2>
        <ProfileAbout description=''/>
      </div>
      )
  }
}

export default ProfileCard
