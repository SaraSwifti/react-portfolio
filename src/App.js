
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import ProjectCard from "./components/ProjectCard/ProjectCard";
// import projects from "./projects";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";
import ContactMe from "./pages/ContactMe";
import {BrowserRouter as Router, Route} from "react-router-dom";
// Taking this to the ProjectPage file
// function createprojects(project) {
//     return <ProjectCard
//     id={project.id}
//     key={project.id}
//     img={project.img} 
//     name={project.name}
//     text={project.text}
//     deploy={project.deploy}
//     />;
    
// }

function App() {
    return (
    <Router>
        <div>
            <Header />
            <div className="container">
                <Route exact path="/" component={About} />
                <Route path="/projectpage" component={ProjectPage} />
                <Route path="/contactme"  component={ContactMe} />              
            </div>
            {/* {projects.map(createprojects)} */}
            <Footer />
            
        </div>
        </Router>
    );
}
export default App;