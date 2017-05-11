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


          <p>My approach to web development is highly informed by my education in biology:
            An ample amount of research prep, an equal amount of plan designing and execution,
            topped with a heaping spoonful of wacky/logical creativity. I especially enjoy
            focusing on the small technical details that can make or break the functionality
            of an entire program.
            Anywhere I can do research and solve complex problems is somewhere I will be happy.
          </p>
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
