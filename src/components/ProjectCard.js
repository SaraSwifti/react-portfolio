import React from "react";


function ProjectCard(props) {
    return (
        <div>
            <div className="card" >
                <img src={props.img} className="card-img-top" alt={props.name} />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.text}</p>
                        <a href={props.deploy} className="btn btn-primary">Deployed App</a>
                    </div>
            </div>
        </div>
    );
}
export default ProjectCard;