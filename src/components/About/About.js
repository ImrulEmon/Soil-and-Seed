import React from "react";
import './About.css';
import img from "./5495.jpg";
import { FloatingLabel, Form } from "react-bootstrap";
import { Button } from "@material-tailwind/react";
const About = () => {
  return (
      <div className="container">
    <div className="md:grid grid-cols-2 gap-2 my-12">
     <div className="my-auto text-justify px-5">
     <h1 className="about font-bold text-center text-lime-600 my-8 text-5xl">About Us</h1>
      <p className="font-bold text-xl">
        Thank You for being part of this long term green future of ours. Join us
        and let’s plant as many trees as possible. What we can give <span className="text-xl font-extrabold text-red-600 italic">OUR FUTURE GENERATION</span> is
        transparency, honesty and a better future with <span className="text-xl font-extrabold text-lime-600 italic">fresh air</span>.
      </p>
     </div>
      <img src={img} alt="soil&seed team" />
    </div>
    {/* contact form */}
    <div className="my-12 md:my-24 container text-center">
  <FloatingLabel controlId="floatingTextarea" label="email@mail.com" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px',marginBottom:"15px" }}
    />
  </FloatingLabel>
  <Button>Feedback</Button>
</div>
    </div>
  );
};

export default About;
