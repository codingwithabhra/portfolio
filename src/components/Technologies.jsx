import React from "react";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="container pb-5">
      {/* HEADING */}
      <div className="top d-flex justify-content-center my-4">
        <div className="text-center">
          <h1 className="heading">Tech Stack</h1>
          <p className="text-secondary header-p">
            Core technologies and tools I use
          </p>
          <div className="blue-Line mx-auto"></div>
        </div>
      </div>

      {/* TECHS */}
      <div className="techs my-5">
        <div className="container d-flex justify-content-center">
          <div className="row g-4">
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 text-primary fs-2">
                  <i className="fa-brands fa-react"></i>
                </div>
                <span className="fs-4 fw-semibold text-white">React</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 text-primary fs-2">
                  <i className="fa-brands fa-node-js"></i>
                </div>
                <span className="fs-4 fw-semibold text-white">Node</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 text-primary fs-2">
                  <SiExpress />
                </div>
                <span className="fs-4 fw-semibold text-white">Express</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 text-primary fs-2">
                  <SiMongodb />
                </div>
                <span className="fs-4 fw-semibold text-white">MongoDB</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 text-primary fs-2">
                  <i className="fa-brands fa-square-js"></i>
                </div>
                <span className="fs-4 fw-semibold text-white">JavaScript</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 text-primary fs-2">
                  <i className="fa-brands fa-bootstrap"></i>
                </div>
                <span className="fs-4 fw-semibold text-white">Bootstrap</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 text-primary fs-2">
                  <RiTailwindCssFill />
                </div>
                <span className="fs-4 fw-semibold text-white">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 text-primary fs-2">
                  <i className="fa-brands fa-html5"></i>
                </div>
                <span className="fs-4 fw-semibold text-white">HTML5</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center mb-4">
                <div className="me-3 text-primary fs-2">
                  <i className="fa-brands fa-css"></i>
                </div>
                <span className="fs-4 fw-semibold text-white">CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
