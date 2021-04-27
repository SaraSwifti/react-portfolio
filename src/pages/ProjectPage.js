import React from "react";
import ProjectCard from "../components/ProjectCard";
import Projects from "../projects";
// import {NavBarLink} from "react-router-dom";
//need to import styling page.

const ProjectPage = () => {
    function createprojects(project) {
            return <ProjectCard
            id={project.id}
            key={project.id}
            img={project.img} 
            name={project.name}
            text={project.text}
            deploy={project.deploy}
            />;
            
        }

    return (
        
<div className="container>"
        //    <ProjectCard />
           {Projects.map(createprojects)
           
        
<div/>
    );
}
export default ProjectPage;