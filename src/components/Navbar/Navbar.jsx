import React from 'react';
import './Navbar.css';
import Quiz from "./Quiz.png";
import { FaUser } from 'react-icons/fa';


import { Link } from 'react-router-dom';

const Navbar = ({ username }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        
        <img src={Quiz} width={"40px"}/>
      </div>
      <div className="username">
       
        {username && <span>Welcome  <FaUser/> {username}</span>}
      </div>
      {/* <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div> */}
    </nav>
  );
};

export default Navbar;