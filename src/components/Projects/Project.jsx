import React from 'react';
import './Project.scss';

const Project = (props) => {
    const { img, disc } = props.item;
  return (
    <div className='project-wrapper project'>
        <img src={img} alt="project" />
        <div className="disc">
            <h1>Description</h1>
            <p>{disc}
            <a href="/">demo</a>
            </p>
        </div>
    </div>
  )
}

export default Project;