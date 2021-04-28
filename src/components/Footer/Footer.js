import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer mt-auto py-3 bg-light align-middle">
        <p>Sara Taylor</p>
        <p>Copyright © {currentYear}</p>
        </footer>
    );
}

export default Footer;