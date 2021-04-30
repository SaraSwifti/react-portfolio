import React from "react";
import "./ProjectCard.css";


function ProjectCard(props){ 

    return (
       <div className="container">;
            <div className="row">
          <div className="col">
          <div className="card" >
            <img src={props.img} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}{props.id}</h5>
                <p className="card-text">{props.text}</p>
                <a href={props.deploy} className="btn btn-primary">Deployed App</a>
            </div>
        </div>
        </div>
        </div>
         </div>

    );
   
}
export default ProjectCard;