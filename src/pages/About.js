import "./About.css";
import React from "react";
import ProfilePicture from "../images/sara-image.JPG";
const PhotoAlt = "Black and White photo of Sara Taylor";




function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>About Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div className="headShot">
            <img className="img-fluid w-100" src={ProfilePicture}
              alt={PhotoAlt} />
          </div>
        </div>
        <div className="col">
          <p>Hello, my name is Sara Taylor. I never saw myself as a coder, however those who are close to me and understand my creative technical skill sets encouraged me to take a deeper look at web design.
            Sooo, here I am making the leap and loving it.  </p>
          <br></br>
          <p> I will be updating the projects on my portfolio page as I complete them. Thank you for visiting. </p>
           
        </div>
        </div>
      </div >
      )
}
      export default About;