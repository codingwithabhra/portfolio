import React from "react";

const Connectwithme = () => {
  return (
    <>
    <div className="container pb-5">
      {/* HEADING */}
      <div className="top d-flex justify-content-center my-4">
        <div className="text-center">
          <h1 className="heading">Connect</h1>
          <p className="text-secondary header-p">
            Let’s connect & turn ideas into impactful digital experiences
          </p>
          <div className="blue-Line mx-auto"></div>
        </div>
      </div>

      {/* CONNECTIONS */}
      <div className="my-4">
        <div className="row g-4 my-5">
            <div className="col-md-6">
                <div className="card h-100 border-0 shadowm-sm p-4 transform-card">
                    <div className="d-flex align-items-center mb-3">
                        <i className="fa-solid fa-envelope text-primary fs-3 me-3"></i>
                        <h3 className="fs-4 mb-0 text-white">Email</h3>
                    </div>
                    <p className="mb-0 text-secondary">patra.abhra97@gmail.com</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card h-100 border-0 shadowm-sm p-4 transform-card">
                    <div className="d-flex align-items-center mb-3">
                        <i className="fa-brands fa-square-github text-primary fs-3 me-3"></i>
                        <h3 className="fs-4 mb-0 text-white">GitHub</h3>
                    </div>
                    <p className="mb-0 text-secondary">Follow on GitHub</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card h-100 border-0 shadowm-sm p-4 transform-card">
                    <div className="d-flex align-items-center mb-3">
                        <i className="fa-brands fa-square-linkedin text-primary fs-3 me-3"></i>
                        <h3 className="fs-4 mb-0 text-white">LinkedIn</h3>
                    </div>
                    <p className="mb-0 text-secondary">Connect on LinkedIn</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card h-100 border-0 shadowm-sm p-4 transform-card">
                    <div className="d-flex align-items-center mb-3">
                        <i className="fa-brands fa-square-x-twitter text-primary fs-3 me-3"></i>
                        <h3 className="fs-4 mb-0 text-white">Twitter</h3>
                    </div>
                    <p className="mb-0 text-secondary">Follow on Twitter</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    <hr />
    </>
  );
};

export default Connectwithme;
