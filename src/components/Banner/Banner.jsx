import React from "react";
import "./Banner.css";
import LightSpeed from "react-reveal/LightSpeed";
import { Button } from "react-bootstrap";
// import { Button } from "react-bootstrap";
const Banner = () => {
  return (
    <div className="banner container-fluid">
      <LightSpeed left>
        <h4 className="pt-56 md:pt-52 plant italic text-blue-800">When Is the Best Time to Plant a <span className="text-lime-500 text-5xl italic one">Tree ?</span></h4>
      </LightSpeed>
      <LightSpeed right>
        <h4 className="text-lime-600"><span className="text-5xl italic two">-Ten</span> Years Ago</h4>
      </LightSpeed>
    </div>
  );
};

export default Banner;
