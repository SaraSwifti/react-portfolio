import React from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import projects from "../util/Projects";

//need to import styling page.

const ProjectPage = () => {

    return (
        <div className="col">
            {projects.map((project) => {
                return (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        img={project.img}
                        name={project.name}
                        text={project.text}
                        deploy={project.deploy} />
                );
            }
            )
            }
        </div>

    )
}
export default ProjectPage;