import React from 'react';

const Tree = (props) => {
    const {_id,name,price,img,info}=props.tree;
    return (
        <div>
            <img src={img} alt="" />
            <h1>Name : {name}</h1>
        </div>
    );
};

export default Tree;