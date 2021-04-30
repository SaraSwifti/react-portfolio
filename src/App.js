
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import ProjectCard from "./components/ProjectCard/ProjectCard";
// import projects from "./projects";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";
import ContactMe from "./pages/ContactMe";
import {Route, BrowserRouter as Router, Switch,} from "react-router-dom";


function App() {
    return (
    <Router>
        <div>
                <Header />
              
                <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/projectpage" component={ProjectPage} />
                <Route exact path="/contactme"  component={ContactMe} /> 
                </Switch>    
                  
                <Footer />
            
        </div>
        </Router>
    );
}
export default App;