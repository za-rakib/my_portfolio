import React from 'react';
import './About.css'
import image from '../images/about (2).jpg';

const About = () => {
    return (
        <div className='about row'>
             <div className="image col-md-5 offset-md-2 mt-5 pt-3">
             <img src={image} alt=""/>
             </div>
             <div className="about-text text-white col-md-5 ">
                  <h1>Hi, I am Rakib</h1>
                  <p>I am a frontend web developer.I started my web journey <br/>early on my own but have later also finished <br/> web development course at programming hero.I am always <br/> ready to learn something new.</p>
                  <h5>Full Name &nbsp;  :&nbsp; Md Rakib Hossen</h5>
                  <h5>Age :22 years</h5>
                  <h5>Nationality: Bangladesh</h5>
                  <h5>Email:phpzarakib@gmail.com</h5>
                  <h5>Cell: +8801517037484</h5>
             </div>
        </div>
    );
};

export default About;