import React from "react";
import "./Banner.css";
import LightSpeed from "react-reveal/LightSpeed";
import { Button } from "react-bootstrap";
// import { Button } from "react-bootstrap";
const Banner = () => {
  return (
    <div className="banner container-fluid text-shadow">
      <LightSpeed left>
        <h4 className="pt-32 text-"><span className="text-lime-500 text-5xl italic one">Plant</span> a tree</h4>
      </LightSpeed>
      <LightSpeed right>
        <h4 className="text-lime-600">Save Mother <span className="text-5xl italic two">Earth</span></h4>
      </LightSpeed>
    </div>
  );
};

export default Banner;
