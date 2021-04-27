import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <div>
        <p>Sara Taylor</p>
        <p>Copyright © {currentYear}</p>
        </div>
    );
}

export default Footer;