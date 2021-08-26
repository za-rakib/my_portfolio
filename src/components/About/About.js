import React from "react";
import "./About.css";
import image from "../../images/about (2).jpg";

const About = () => {
  return (
    <div className="container-fluid about">
      <div className=" row">
        <div className="image col-md-5 offset-md-1 mt-5 pt-3">
          <img src={image} alt="" />
        </div>
        <div className="about-text text-white col-md-5 ">
          <h1>Hi, I am Rakib</h1>
          <p>
            A final year student in Computer Science and Engineering (CSE), I
            have over 1 year of experience working across the entire stack of
            web development.I am a web developer. I count myself as a hardworking person. Honesty, hard work, and passion will support me to grow myself.
          </p>
          <h5>Full Name &nbsp; :&nbsp; Md Rakib Hossen</h5>
          <h5>Age :23 years</h5>
          <h5>Nationality: Bangladesh</h5>
          <h5>Email:phpzarakib@gmail.com</h5>
          <h5>Cell: +8801517037484</h5>
        </div>
      </div>
    </div>
  );
};

export default About;
