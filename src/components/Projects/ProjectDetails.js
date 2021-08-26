import React from "react";
import { Link } from "react-router-dom";
import "./ProjectDetails.css";
const ProjectDetails = ({ project }) => {
  return (
    <div className="card per-card col-md-3 mt-5">
      <div className="card-image mt-2">
        <img src={project.image} className="card-img w-100" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="text-center card-title">{project.title}</h5>
        <p className="card-text">{project.text}</p>
        <div>
          <a href={project.live} target="_blank" className="btn mr-4 " rel="noreferrer">
            LIVE
          </a>
          <a href={project.client} target="_blank" className="btn mr-4 " rel="noreferrer">
            CLIENT
          </a>
          <a href={project.server} target="_blank" className="btn " rel="noreferrer">
            SERVER
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
