import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./Tree.css";
import { Button, SplitButton } from "react-bootstrap";
import MyButton from "../MyButton/MyButton";
import { useNavigate } from "react-router-dom";

const Tree = (props) => {
  const { _id, name, price, img, info } = props.tree;
  const nevigate = useNavigate();
  const details = () =>{
    console.log('clicked')
      nevigate(`/details/${_id}`);
  }
  return (
    <div>
      <div class="rounded overflow-hidden shadow-lg">
        <img className="card-img img-fluid" src={img} alt="" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            <span className="learn">Learn To Grow</span> <br />{" "}
            <span className="text-xl italic border-l-emerald-600 name">
              {name}
            </span>
          </div>
          <h5>
            <FontAwesomeIcon icon={faDollarSign} />
            <span className="text-6xl my-4 price">{price}</span>
          </h5>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-blue-500 hover:text-white">
            #bonsai
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-green-500 hover:text-white">
            #tree
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-red-500 hover:text-white">
            #gardening
          </span>
         <MyButton info={info} details={details} variant='success'>Learn More!</MyButton>
        </div>
        
      </div>
    </div>
  );
};

export default Tree;
