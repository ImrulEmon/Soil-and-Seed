import React, { useEffect, useState } from "react";
import Tree from "../Tree/Tree";

const Services = () => {
  const [trees, setTrees] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTrees(data));
  }, []);
  return (
    <div className="container">
      <h1>Services</h1>
      <h4>{trees.length}</h4>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {trees.map((tree) => (
          <Tree key={tree._id} tree={tree}></Tree>
        ))}
      </div>
    </div>
  );
};

export default Services;
