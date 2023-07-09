import React from 'react'
import "./Index.css";
import Dp from './gauravpic.jpg';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<div className="navbar">
  <NavLink  to="/service"><i className="fa fa-fw fa-search" ></i> Service </NavLink>
  <NavLink  to="/contact"><i className="fa fa-fw fa-user" ></i> Contact us</NavLink>
  <NavLink  to="/about"><i className="fa fa-fw fa-envelope"></i> About us</NavLink>
  <NavLink to="/"><i className="fa fa-fw fa-home"></i> Home</NavLink>
  <h1 className='split'> Gaurav tech</h1>
  <img className='pic' src={Dp} alt="error pic" />
   
  

  
</div>

    </div>
  )   
}

export default Navbar;