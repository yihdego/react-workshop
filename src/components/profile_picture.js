import React, { Component } from 'react';
import $ from 'jquery';

class ProfilePicture extends Component {
  constructor() {
    super();
    this.state = {
      user: { avatar_url: '' },
    };
  }

  componentWillMount() {
    $.get({ url: 'https://api.github.com/users/ianpetergreenburg' })
    .then((userdata) => {
      this.setState({
        user: userdata,
      });
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.user.avatar_url} className="img-rounded img-responsive" alt='profile'/>
      </div>
    );
  }
}

export default ProfilePicture;
