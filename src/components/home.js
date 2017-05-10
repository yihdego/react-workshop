import React, {Component} from 'react'
import ProjectCard from './project'

class Home extends Component {
  render(){
    return (
      <div className='home'>
        <h1> Home </h1>
        <div className='home-content'>
          <p>Hi I'm Ian. Web Developer, Biologist and an absolutely awesome chef! </p>

          <dl>
            <dt><dfn>Where am I located?</dfn></dt>
            <dd>Seattle, WA</dd>
            <dt><dfn>What do I work in?</dfn></dt>
            <dd>React for Front End Work and Rails for Back End</dd>
            <dt><dfn>What is my favorite restaurant?</dfn></dt>
            <dd>Red Robins (bottomless fries!)</dd>
          </dl>


          <p>Cum audissem Antiochum, Brute, ut solebam, cum M. Quis enim potest istis, quae te, ut ais, delectant, brevibus et acutis auditis de sententia decedere? Haec et tu ita posuisti, et verba vestra sunt. Non pugnem cum homine, cur tantum habeat in natura boni; Sed fac ista esse non inportuna; Neminem videbis ita laudatum, ut artifex callidus comparandarum voluptatum diceretur. Ergo id est convenienter naturae vivere, a natura discedere. Que Manilium, ab iisque M. Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. </p>
          <div>
            <ProjectCard image={'food'} url={'https://whatsie.herokuapp.com'}/>
            <ProjectCard image={'robot'} url={'https://psklrmrfi.herokuapp.com'}/>
            <ProjectCard image={'backpack'} url={'https://scramble.herokuapp.com'}/>
          </div>
          <blockquote cite='http://loripsum.net'>
            An investment in knowledge pays the best interest. -Benjamin Franklin, <i>The Way to Wealth</i>
          </blockquote>
        </div>
      </div>
      )
  }
}

export default Home
