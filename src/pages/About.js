import React from "react";



function About() {
    return(
        <div className="container">
            <div className="row">
      <div className="col">
        <h1>About Me</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-3">
        <div className="headShot">
          <img src=".../public/sara-image.jpg" className="img-fluid w-100"
          alt="Black and White photo of Sara Taylor"/>
        </div>
        </div>
      </div>
      <div className="col-9">
        <p>My name is Sara Taylor. Never in a million years did I think I would be in a Full-Stack web design
          certification program. But here I am making the leap! </p>
        <p>I had been working on my own website partime in Wordpress for several months when my 19 yo came home from his own business.
          I was hoping for some help on how to make my site ADA compliant from his web-developer. My son finally said "Mom, your questions to 'So-n-so' made
          him have to go in and fix our website. You should take a className and learn how to do this from
          scratch." </p>
        <p>He reminded me that I was good at math, languages and had the mind of a designer. So here I am ...lets get this party started. </p>
      </div>
      </div>
    )
}
export default About;