import React, { Component } from 'react';
import loading from '../images/loading.gif';

class Loading extends Component {
  render() {
    return (
      <div className='Loading'>
        <img src={loading} alt='loading' className='loading' />
      </div>
    );
  }
}

export default Loading;
