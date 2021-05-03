import React from 'react';
import { Link } from 'react-router-dom';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul>
                    <div className="name" href='/home'><h2>ZA Rakib</h2></div>
                    
                </ul>
                <ul className="navbar-nav ml-auto nav">
                    <li className="nav-item active">
                        <Link className="nav-link mr-3" to="/home">HOME <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/projects">PROJECTS</Link>                   
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/blogs">BLOGS</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link className="nav-link mr-3" to="/contact">CONTACT</Link>
                    </li>
                    <li className="nav-item resume">
                        <a  className="nav-link" href="https://drive.google.com/uc?export=download&id=10vFiy1oG0AuYo8G9cxM4ttvcd7_JQPmM"  > RESUME <FontAwesomeIcon icon={faArrowDown} /> </a>
                        
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;