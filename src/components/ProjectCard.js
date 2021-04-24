import React from "react";


function ProjectCard(props) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <img src={props.img} className="card-img-top" alt={props.name} />
                </div>
                <div className="bottom">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}{props.id}</h5>
                        <p className="card-text">{props.text}</p>
                        <a href={props.deploy} className="btn btn-primary">Deployed App</a>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default ProjectCard;