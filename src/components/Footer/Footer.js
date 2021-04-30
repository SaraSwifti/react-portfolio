import React from "react";
import "./Footer.css";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer col-md-12 footer-bottom fixed-bottom">
            <div className="text-center">
        <p>Sara Taylor</p>
        <p>Copyright © {currentYear}</p>
        </div>
        </footer>
    );
}

export default Footer;