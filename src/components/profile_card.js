import React, { Component } from 'react';
import ProfilePicture from '../components/profile_picture';
import ProfileAbout from '../components/profile_about';

class ProfileCard extends Component {
  render() {
    return (
      <div className='card'>
        <ProfilePicture />
        <h2>Ian Peter Greenburg</h2>
        <ProfileAbout />
      </div>
    );
  }
}

export default ProfileCard;
