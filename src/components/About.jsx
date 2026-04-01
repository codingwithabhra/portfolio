import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container py-5">
      <div className="row py-5">
        {/* left part */}
        <div className="left col-lg-8 text-white">
          <h1 className="fw-bold about-h1">Abhra Patra</h1>
          <p className="text-secondary about-p">Full Stack Developer</p>
          <div className="blue-Line"></div>
          <div className="aboutText">
            <p>
              A passionate full-stack developer focused on building seamless and
              user-friendly digital experiences using modern technologies.
            </p>
            <p>
              Focused on using React, Express.js, Node.js, and MongoDB to
              develop scalable applications with a strong emphasis on user
              experience.
            </p>
          </div>
          <div className="aboutBtn d-flex gap-3 py-4">
            <Link className="btn btn-primary">Contact Me</Link>
            <Link className="btn btn-outline-light">Resume</Link>
          </div>
        </div>

        {/* right part */}
        <div className="right col-lg-4 py-2 d-flex justify-content-center">
          <div className="profile-wrapper">
            <img src="/aboutme1.jpg" alt="About Me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
