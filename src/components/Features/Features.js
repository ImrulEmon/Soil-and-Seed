import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';

const Features = () => {
    const [features,setFeatures] = useState([]);
    useEffect(()=>{
        fetch("/featured.json")
        .then(res => res.json())
        .then(data => setFeatures(data))
    },[])
    console.log(features);
    return (
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 container my-16">
            {/* <h1 className='text-6xl'>I am here!</h1> */}
            {
                features.map(feature => <Feature key={feature?.id} feature={feature}></Feature>)
            }
        </div>
    );
};

export default Features;