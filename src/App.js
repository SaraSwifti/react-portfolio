import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import Projects from "./Projects";

function App() {
    return (
        <div>
            <Header />
            <ProjectCard 
            img={Projects[0].img}
            name={Projects[0].name}
            text={Projects[0].text}
            deploy={Projects[0].deploy}
            />
            <ProjectCard 
            img={Projects[1].img}
            name={Projects[1].name}
            text={Projects[1].text}
            deploy={Projects[1].deploy}
            />
            <ProjectCard 
            img={Projects[2].img}
            name={Projects[2].name}
            text={Projects[2].text}
            deploy={Projects[2].deploy}
            />
            <ProjectCard 
            img={Projects[3].img}
            name={Projects[3].name}
            text={Projects[3].text}
            deploy={Projects[3].deploy}
            />
            <ProjectCard 
            img={Projects[4].img}
            name={Projects[4].name}
            text={Projects[4].text}
            deploy={Projects[4].deploy}
            />
            <ProjectCard 
            img={Projects[5].img}
            name={Projects[5].name}
            text={Projects[5].text}
            deploy={Projects[5].deploy}
            />
            <Footer />
        </div>
    );
}
export default App;