import React from "react";
import { NavLink, useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";

const Details = () => {
  const { _id } = useParams();
  const [services, setServices] = useServices([]);
  const tree = services.find((tree) => tree._id == _id);
  console.log(tree);
//   const {name,img,info,price}=tree;
  return (
    <div>
      <h1>{services.length}</h1>
        <h3>{tree?.name}</h3>
        <p>{tree?.info}</p>
        <img src={tree?.img} alt="" />
      <NavLink to="/services">Go Back to Services</NavLink>
    </div>
  );
};

export default Details;
