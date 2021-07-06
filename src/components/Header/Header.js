import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <nav className=" nav navbar navbar-expand-lg sticky-top">
            
                <li className="navbar-brand" to="../pages/About.js"><h1>Sara Taylor's Profile</h1><p>Made with React</p></li>
                <ul className="navcont navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active"  to="/">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active"  to="/projectpage">Project Porfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navlinkfont nav-link active"  to="/contactme">Contact</Link>
                    </li>
                    </ul>
                
            
        </nav>


    )
}
export default Header;