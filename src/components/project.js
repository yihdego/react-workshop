import React, { Component } from 'react';
import food from '../Food-Dome.svg';
import robot from '../Robot.svg';
import backpack from '../Backpack_icon.svg';

var pictures = {
  food: food,
  robot: robot,
  backpack: backpack,
};

class ProjectCard extends Component {
  render() {
    var image = pictures[this.props.image];
    return (
      <div className='projectCard'>
        <a href={this.props.url}>
          <img src={image} alt='project' className='project-icon' />
        </a>
      </div>
    );
  }
}

export default ProjectCard;
