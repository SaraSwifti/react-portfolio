import React from "react";
import "./ContactMe.css";


// I am going to need to figure this out,  later I think need to make more components to render my resume
// import ResumeIcon from "../images/resumeicon.png";
// import Resume from "../images/Sara Taylor- CV- 2021- ATS Read.pdf";
// import GitHubLink from "https://github.com/SaraSwifti";
// import GitHubMark from "../images/GitHub-Mark-64px.png";
// import LinkedinLink from "https://www.linkedin.com/in/sara-taylor-7a850331/";
// import LinkedinImage from "../images/LI-In-Bug.png";
// const linked = "linked in icon";
// const githubalt= "github icon";

// const ResumeAlt = "Down load Sara Taylor CV";


function ContactMe() {
    return (
        <div className="container">
            <div className="card">
        <h5> please email me at sara.swifti@gmail.com</h5>
        </div>
        </div>

    //     <div className="container">
    //         <div class="row row-cols-1 row-cols-md-3 g-4">
    //             <div class="col">
    //                 <div class="card h-100">
    //                     <img src={LinkedinImage} class="card-img-top" alt={{linked}}/>
    //                         <div class="card-body">
    //                         <a className="link" href={ LinkedinLink } target="_blank" rel="noreferrer">Linkedin link</a>
    //                             <h5 class="card-title">Linkedin Link</h5>
    //                         </div>
                            
    //                 </div>
    //                 </div>
    //             </div>

    //             <div class="col">
    //                 <div class="card h-100">
    //                     <img className="githubcard card-img-top" src={GitHubMark} alt={{githubalt}}/>
    //                         <div class="card-body">
    //                             <a className="link" href={GitHubLink} target="_blank" rel="noreferrer">Git Hub link</a>
    //                             <h5 class="card-title">Git Hub Profile Link</h5>

    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div class="col">
    //                     <div class="card h-100">
    //                         <img className="resume" src={ResumeIcon} class="card-img-top" alt={{ ResumeAlt }}/>
    //                             <div class="card-body">
    //                                 <a className="resume-button" href={{ Resume }} download="Sara-Taylor-CV-2021-public.pdf" target="_blank" rel="noreferrer">Download My Resume</a>
    //                                 <h5 class="card-title">Card title</h5>

    //                             </div>
                                
    //                     </div>
    //                 </div>

    // </div>                
    )
  }

  export default ContactMe;