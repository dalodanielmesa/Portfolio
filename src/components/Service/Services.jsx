import React from "react";
// import { MdDesignServices } from "react-icons/md";
// import { FiCodesandbox } from "react-icons/fi";
// import { CgWebsite } from "react-icons/cg";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import './Services.scss';

const Services = () => {
  return (
    <div className="services-wrapper" id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <div className="cards">
        <Slide direction="left">
          <Card
            // Icon={MdDesignServices}
            title={"ui/ux designer"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            // Icon={FiCodesandbox}
            title={"graphic designer"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            // Icon={CgWebsite}
            title={"web designer"}
            disc={`Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          />
        </Slide>
      </div>
    </div>
  );
};

export default Services;
