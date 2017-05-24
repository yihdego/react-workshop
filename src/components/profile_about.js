import React, { Component } from 'react';

class ProfileAbout extends Component {
  render() {
    return (
      <div>
        {this.props.description}
      </div>
    );
  }
}

export default ProfileAbout;
