import React from "react";
import "./ContactMe.css";
import "../images/LI-In-Bug.png";
import Resume from "../images/Sara Taylor CV ATS-AE-2021.pdf";


const ResumeAlt = "Download Sara Taylor CV";

// {/* <a href={LinkedinLink} target="_blank">
//                         <img  src={Linkedinicon} alt="link to Sara Taylor's profile"></img></a>
//                         <img src={Linkedinicon} ><a href={LinkedinLink}></a></img>
//                         <br></br> */}
function ContactMe() {
    return (
        <div className="container">
            <div className="row">
                <div className="card contact">
                    <h3>Contact me</h3>
                    <a className="btn" href="mailto:sara.swifti@gmail.com" rel="noopener noreferrer" target="_blank">Email Me</a>
                    <br></br>
                    <a className="btn" href="tel:616-558-1817" rel="noopener noreferrer" target="_blank">Call my Moblie</a>
                    <br></br>
                    <h3>My updated Resume</h3>
                    <a className="btn btn-text-color"alt={ResumeAlt} href={Resume} download="Sara Taylor CV ATS-AE-2021.pdf" target="_blank" rel="noreferrer">Download My Resume</a>
                </div>
               
                    <div className="card contact badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="sara-taylor-7a850331" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/sara-taylor-7a850331?trk=profile-badge">Professional Profile</a>
                    
                 </div>  
            
             </div>
        </div >
            )
}

            export default ContactMe;