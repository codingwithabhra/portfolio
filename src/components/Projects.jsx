import React from "react";
import { projects } from "./projectsData";

const Projects = () => {
  return (
    <div className="container pb-2">
      {/* HEADING */}
      <div className="top d-flex justify-content-center">
        <div className="text-center">
          <h1 className="heading">Projects</h1>
          <p className="text-secondary header-p">
            Built projects that solve real-life problems
          </p>
          <div className="blue-Line mx-auto"></div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="my-5">
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-4 mb-4" key={project.id}>
              <div className="card h-100 border-0 shadow-sm transform-card text-white">
                <div className="img">
                  <img src={project.imageUrl} alt="" style={{width: "100%", height: "300px", objectFit: "contain"}}/>
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <h4 className="card-title fw-bold">{project.title}</h4>

                  <p className="card-text text-secondary py-2">{project.description}</p>

                  <div className="technologies mb-3">
                    {project.technologies.map((tech, index)=>
                      <span key={index} className="badge bg-dark text-decoration-none me-2">
                        {tech}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto">
                    <a
                      href={project.hostedLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary me-2"
                    >
                      Live
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-dark"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
