import React from "react";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="../pages/About.js">Sara Taylor's React App</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="../pages/About.js">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="../pages/Portfolio.js">Project Porfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="../pages/Contact.js">Contact</a>
                    </li>
                    </ul>
                
            </div>
        </nav>


    )
}
export default Header