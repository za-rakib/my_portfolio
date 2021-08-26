import React from "react";
import corona from "../../images/Corona Care.png";
import car from "../../images/Car Services.png";
import fruits from "../../images/React App.png";
import "./project.css";
import ProjectDetails from "./ProjectDetails";
const project = [
  {
    image: corona,
    title: "Corona Care",
    text: "It is a MERN Stack SPA where patients can make any doctor's appointment for them.There are two roles in the website User and Admin.",
    live:`https://corona-care-6424c.web.app/`,
    client:`https://github.com/za-rakib/corona-treatment`,
    server:`https://github.com/za-rakib/corona-care-server`
  },
  {
    image: car,
    title: "Car Repair",
    text: "A full-stack single page web application with a dashboard. Where users can see the car servicing details and users can take any services.",
    live:`https://car-services-e76d0.web.app/`,
    client:`https://github.com/za-rakib/Car_services_client`,
    server:`https://github.com/za-rakib/Car_services_server`
  },
  {
    image: fruits,
    title: "Sweet fruits",
    text: "This is a simple e-commerce website for buying a variety of fruits, from where the buyer will buy any kind of fruits.",
    live:`https://sweet-fruits-d5c1f.web.app/`,
    client:`https://github.com/za-rakib/Sweet_fruits`,
    server:`https://github.com/za-rakib/Sweet_fruits_server`
  },
];

const Projects = () => {
  return (
    <div className="container-fluid">
      <div className="project row d-flex justify-content-center">
        {project.map((project) => (
          <ProjectDetails project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
