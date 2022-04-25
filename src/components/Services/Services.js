import React, { useEffect, useState } from "react";
import Tree from "../Tree/Tree";
import'./Services.css';
const Services = () => {
  const [trees, setTrees] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTrees(data));
  }, []);
  return (
    <div className="container mt-24">
      <h2 className="text-6xl font-bold text-green-700 hover:text-green-800 bonsai italic">BONSAI</h2>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {trees.map((tree) => (
          <Tree key={tree._id} tree={tree}></Tree>
        ))}
      </div>
    </div>
  );
};

export default Services;
