import React, { useEffect, useState } from 'react';
import Tree from '../Tree/Tree';

const Services = () => {
    const [trees,setTrees]=useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setTrees(data))
    },[])
    return (
        <div>
            <h1>Services</h1>
            <h4>{trees.length}</h4>
            {
                trees.map( tree => <Tree key={tree._id} tree={tree}></Tree>)
            }
        </div>
    );
};

export default Services;