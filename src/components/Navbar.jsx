import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-dark-subtle">
        <div className="container">
          <Link className="navbar-brand text-white" to="/">
            <h2 className="fs-4">
              <span>
                <img src="/logo.png" alt="" style={{ width: "25px", marginRight: "10px" }} />
              </span>
              Abhra Patra
            </h2>
          </Link>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          {/* <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <Link className="nav-link text" to="/about">
              About
            </Link>
            <Link className="nav-link text" to="/projects">
              Projects
            </Link>
            <Link className="nav-link text" to="/connect">
              Connect
            </Link>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
