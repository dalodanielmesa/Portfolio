import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import Tooltip from '@mui/material/Tooltip';
import './ProfComponent.scss';

const ProfComponent = () => {
  return (
    <div id="home" className="prof-wrapper">
      <Slide direction="left">
        <div className="texts">
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Ezequiel Brito</h1>
          <h3>Front-End Developer</h3>
          <p>
            I am passionate about technology and I love creating unique
            experiences on the web. Throughout my career I have worked on
            challenging projects, where I have had the opportunity to apply
            my skills to create responsive, intuitive and visually appealing
            websites.
          </p>
          <a href='https://wa.me/message/ST66CS7X7BHZM1'>Let's talk</a>
          <div className="social">
            <p>Check out my</p>
            <Fade className="social-icons" direction="right" delay={1000} cascade damping={.3}>
              <Tooltip arrow title="GutHub">
                <span>
                  <a href="/">
                    <GitHubIcon fontSize='small' />
                  </a>
                </span>
              </Tooltip>
              <Tooltip arrow title="LinkedIn">
                <span>
                  <a href="/">
                    <LinkedInIcon fontSize='small' />
                  </a>
                </span>
              </Tooltip>
              <Tooltip arrow title="CV">
                <span>
                  <a href="/">
                    <FilePresentIcon fontSize='small' />
                  </a>
                </span>
              </Tooltip>
            </Fade>
          </div>
        </div>
      </Slide>
      <Slide direction="right">
        <div className="profile">
          <img
            src="https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png"
            alt="profile"
          />
        </div>
      </Slide>
    </div>
  );
};

export default ProfComponent;
