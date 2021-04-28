import React from "react";
// import ResumeIcon from "../images/resumeicon.png";
// import Resume from "../images/Sara Taylor- CV- 2021- ATS Read.pdf";
// const ResumeAlt ="Down load Sara Taylor CV";

function Contactme() {
    return (
        <div className="card">
            <h1>Please feel free to reachout to me at sara.swifti@gmail.co</h1>
            <a className="footerCV" href={{Resume}} download="Sara-Taylor-CV-2021-public.pdf" target="_blank" aria-label="Sara Taylor Resume" />
            <img className="resume" src={{ResumeIcon}} alt={{ResumeAlt}}>
        </div>
    )
  }

  export default ContactMe;