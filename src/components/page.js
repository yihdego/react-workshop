import React, { Component } from 'react';
import ProfileCard from './profile_card';
import Content from './content';
import Navbar from './navbar';
import $ from 'jquery';

class Page extends Component {
  render() {
    return (
      <div className='page full-height'>
        <Navbar />
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard />
          </div>
          <div className='col-md-8'>
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
