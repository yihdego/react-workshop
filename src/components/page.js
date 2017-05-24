import React, { Component } from 'react';
import ProfileCard from './profile_card';
import Content from './content';
import Navbar from './navbar';
import $ from 'jquery';

var description = 'A just-outside-of-the-city boy with a penchant for shorts and Ruby.';
var username = 'Ian Peter Greenburg';

class Page extends Component {
  constructor() {
    super();
    this.state = {
      content: 'home',
    };
  }
  go(i) {
    this.setState({
      content: i.target.id,
    });
  }
  componentDidMount() {
    $('.App').css('background-color', 'white');
  }
  render() {
    return (
      <div className='page full-height'>
        <Navbar
          onClick={(i) => this.go(i)}
        />
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard username={username} description={description}/>
          </div>
          <div className='col-md-8'>
            <Content content={this.state.content}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
