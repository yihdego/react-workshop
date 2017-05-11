import React, {Component} from 'react'
import pinterest from '../icons/pinterest.svg'
import linkedin from '../icons/linkedin.png'
import snapchat from '../icons/snapchat.svg'
import twitter from '../icons/twitter.svg'
import facebook from '../icons/facebook.svg'

class Contact extends Component {
  render(){
    return (
      <div className='contact'>
        <h1> Contact </h1>
        <div className='contact-content'>
          <p>Please contact me about job opportunities, links to cool tutorials that you find helpful, cutting-edge bio research articles or recipes that  absolutely blow your mind. </p>

          <ul className='contact-links'>
            <li>Email: Iangreenborg@hotmail.net</li>
            <li>Phone: (206)-235-6862-425-7189</li>
            <div className='list-inline'>
            <li><a href='https://www.linkedin.com/'><img src={linkedin} className='icon'/></a></li>
            <li><a href='https://www.facebook.com/'><img src={facebook} className='icon' /></a></li>
            <li><a href='https://twitter.com/probirdrights?lang=en'><img src={twitter} className='icon' /></a></li>
            <li><a href='http://snapchat.com/'><img src={snapchat} className='icon' /></a></li>
            <li><a href='https://www.pinterest.com/'><img src={pinterest} className='icon' /></a></li>
            </div>
          </ul>
        </div>
      </div>
      )
  }
}

export default Contact
