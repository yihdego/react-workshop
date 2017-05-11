import React, {Component} from 'react'

class About extends Component {
  render(){
    return (
      <div className='about'>
        <h1> About Me </h1>
        <div className='about-content'>
          <p>My original interest in programming sprouted while a friend of mine switched majors in college from linguistics to computer science. Seeing him parlance his skills from linguistics to cse made me wonder what skills I had that could transition well. I was studying cellular biology at the time, a math enthusiast and also a lover of sudoku puzzles. </p>
          <p>The summer after my junior year, I had a large amount of free time which I would normally fill with more work hours. With encouragement from the same friend I instead decided then would be the time to take a computer programming course. Initially I went into the class with no expectations, having had others insist the course would just ruin my GPA. Luckily it turned out that coding was really fun!</p>
          <p>Part of what I find fun is the similarity between understanding code and creating physiology experiments. There is a flow of information/signalling that gets passed around the system and determines the system’s state. When a part of the system isn’t functioning as expected, strange outcomes occur. I take great pride in my ability to debug and read code and a lot of that ability comes from knowing how to design a biology experiment. Isolating the system components and controlling the variables simplify and organize the process to determine where things are breaking down and set up how to fix what’s wrong (assuming error messages didn’t already make it clear).</p>
          <p>What programming offers me, that  biology can’t as easily, is the ability to create my own environments to play around in instead of creating experiments for existing ones. This helps support a higher level of creativity, that outside of cooking, I don’t normally get to experience. Having mostly never been inspired to create in more traditional artistic media, programming helped scratch an itch I hadn’t fully realized was there. </p>
          <p>My end goal for my career in programming is to eventually return to university to study computational biology. I want to combine the intellectual joy I get from researching biological systems and the creative stimulation from designing programs. I hope to program software for agricultural research equipment similar to what I used to work with in my undergrad. Especially the type of equipment that is used to assess crop growing conditions, which with the onset of climate change will be necessary to keep farming and harvesting capabilities efficient enough to support the ever growing population. </p>
        </div>
      </div>
      )
  }
}

export default About
