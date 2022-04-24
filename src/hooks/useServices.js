import { useEffect, useState } from "react";

const useServices =()=>{
    const [trees, setTrees] = useState([]);
    useEffect(() => {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => setTrees(data));
    }, []);
    return [trees,setTrees];
}
export default useServices;