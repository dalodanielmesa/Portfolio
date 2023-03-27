import React, { useState } from 'react'
// import { GiCandleFlame, GiCrossedBones } from "react-icons/gi";
// import { FaBars } from "react-icons/fa";
import './Header.scss';

const Header = () => {
  const [bar, setBar] = useState(false);

  const handleStatusBar = () => {
    if(window.screen.width < 640){
      setBar(!bar);
    }
  }

  return (
    <div className='header-wrapper'>
      <div className='logo'>
        <span className='green'>
          {/* <GiCandleFlame /> */}
          </span>
        <h1>Portfolio</h1>
      </div>
      <div>
        <div onClick={handleStatusBar} className={'bars ' + (bar?'bar-open':'')}>
          {/* {
            !bar ? <FaBars className='bar' /> : <GiCrossedBones className='bar'/>            
          } */}
        </div>
        <div className={'nav ' + (bar?'nav-open':'')}>
          <span onClick={handleStatusBar}><a href="#home">Home</a></span>
          <span onClick={handleStatusBar}><a href="#service">Services</a></span>
          <span onClick={handleStatusBar}><a href="#project">Projects</a></span>
          <span onClick={handleStatusBar}><a href="#client">Testimonials</a></span>
          <span onClick={handleStatusBar}><a href="#footer">Portfolio</a></span>
        </div>
      </div>
    </div>
  )
}

export default Header

