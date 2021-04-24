
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import projects from "../projects";

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

function App() {
    return (
        <div>
            
            <Header />
            {projects.map(createprojects)}
            <Footer />
            
        </div>
    );
}
export default App;