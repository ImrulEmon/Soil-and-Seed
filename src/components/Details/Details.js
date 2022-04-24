import React from "react";
import './Details.css';
import { NavLink, useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
const Details = () => {
  const { _id } = useParams();
  const [services, setServices] = useServices([]);
  const tree = services?.find((tree) => tree._id == _id);
  console.log(tree);
//   const {name,img,info,price}=tree;
  return (
    <div className="details text-justify container my-3">
        <h3 className="title">{tree?.name}</h3>
        <img className="w-50 mx-auto my-12 shadow-2xl" src={tree?.img} alt="" />
        <p>{tree?.info}</p>
      <div className="text-center my-4 font-bold text-green-600">
      <NavLink to="/services"> <FontAwesomeIcon icon={faArrowAltCircleLeft}/> Go Back to Services</NavLink>
      </div>
    </div>
  );
};

export default Details;
