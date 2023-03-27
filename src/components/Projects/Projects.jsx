import React from 'react'
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';
import './Projects.scss';

const Projects = () => {
  return (
    <div className='projects-wrapper' id='project'>
        <Zoom>
            <h1>Recent <span className="green">Projects</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto doloremque 
            voluptate excepturi porro sed totam quis animi dolorum rerum earum.</p>
        </Zoom>
        <div>
            <SliderComp/>
        </div>
    </div>
  )
}

export default Projects;