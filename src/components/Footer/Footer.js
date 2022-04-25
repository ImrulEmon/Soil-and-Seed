import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className='bg-slate-700 footer'>
            <div className='py-4 d-md-flex justify-content-md-center'>
                <div className='mx-md-5 text-md-justify'><ul>
                    <li> <NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/services'>Services</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to=''>FAQ</NavLink></li>
                </ul></div>
               <div className='mx-md-5 text-md-justify'>
               <ul>
                    <li><NavLink to=''>Mushroom</NavLink></li>
                    <li><NavLink to='/services'>Bonsai</NavLink></li>
                    <li><NavLink to='/home'>Cactus</NavLink></li>
                </ul>
               </div>
            </div>
        </div>
    );
};

export default Footer;