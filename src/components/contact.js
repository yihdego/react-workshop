import React, {Component} from 'react'

class Contact extends Component {
  render(){
    return (
      <div className='contact'>
        <h1> Contact Filler </h1>
        <div className='contact-content'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href='http://loripsum.net/' target='_blank'>Sed tamen intellego quid velit.</a> <a href='http://loripsum.net/' target='_blank'>Qualem igitur hominem natura inchoavit?</a> Sint ista Graecorum; Duo Reges: constructio interrete. Sed fortuna fortis; </p>

          <ul>
            <li>Fortemne possumus dicere eundem illum Torquatum?</li>
            <li>Egone non intellego, quid sit don Graece, Latine voluptas?</li>
            <li>Aliter homines, aliter philosophos loqui putas oportere?</li>
            <li>Illa tamen simplicia, vestra versuta.</li>
            <li>Nos commodius agimus.</li>
          </ul>
        </div>
      </div>
      )
  }
}

export default Contact
