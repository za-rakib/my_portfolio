import React from 'react';
import pro1 from '../images/pro1.png'
import pro2 from '../images/pro2.png'
import pro3 from '../images/pro3.png'
import './project.css'

const Projects = () => {
    return (
        <div className='project row d-flex justify-content-center'>
            <div className="card per-card col-md-3 mt-5">
                <img style={{height:'300px', width:'100%'}} src={pro1} alt=""/>
                    <div className="card-body">
                        <h5 className="text-center card-title">Sweet Fruits</h5>
                        <p className="card-text">Some quick example text to build on the </p>
                        <a href="#" target="_blank" className="btn px-4  mr-4">LIVE </a>
                        <a href="#" target="_blank" className="btn px-4 ml-4 "> GITHUB</a>
                    </div>
               </div>
               <div className="card per-card  col-md-3 mt-5">
                <img style={{height:'300px', width:'100%'}} src={pro2} alt=""/>
                    <div className="card-body">
                        <h5 className="text-center card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the </p>
                        <a href="#" target="_blank" className="btn px-4  mr-4">LIVE </a>
                        <a href="#" target="_blank" className="btn px-4 ml-4 "> GITHUB</a>
                    </div>
               </div>
               <div className="card per-card  col-md-3 mt-5">
                <img style={{height:'300px', width:'100%'}} src={pro3} alt=""/>
                    <div className="card-body">
                        <h5 className="text-center card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the </p>
                        <a href="#"target="_blank" className="btn px-4  mr-4">LIVE </a>
                        <a href="#"target="_blank" className="btn px-4 ml-4 "> GITHUB</a>
                    </div>
               </div>
               
            </div>
    );
};

export default Projects;