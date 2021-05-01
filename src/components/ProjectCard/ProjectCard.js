import React from "react";
import "./ProjectCard.css";


function ProjectCard(props){ 

    return (
       <div className="container">;
            <div className="row">
          <div className="col">
          <div className="card" >
            <img className="card-img-top" src={props.img}  alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}{props.id}</h5>
                <p className="card-text">{props.text}</p>
                <a className="btn btn-primary" href={props.deploy} >Deployed App</a>
            </div>
        </div>
        </div>
        </div>
         </div>

    );
   
}
export default ProjectCard;