import React from "react";
import "../Assets/css/style.css";
import { Link, NavLink } from "react-router-dom";
function DevProfile() {
  return (
    <>
      <footer>
        <section className="container-fluid">
          <section className="row">
            <section className="col-6 pt-lg-5 pt-5 ps-4 ps-lg-5  d-flex flex-column  align-items-center">
              <h4>Developed by</h4>
              <p>Velan S</p>
            </section>
            <section className="col-6 pt-4 ps-5 pt-lg-5 d-flex flex-column align-items-center">
              <ul className="d-lg-flex flex-lg-row pt-lg-3 social">
                <li className="socialProfile m-1 nav-link">
                  <Link
                    to={"https://www.linkedin.com/in/velan-s-2703291ab"}
                    target="_blank"
                  >
                    <img
                      src={require("../Assets/images/linkedin.png")}
                      className="pe-2"
                      alt=""
                    />
                    <span>LinkedIn</span>
                  </Link>
                </li>
                <li className="socialProfile m-1 nav-link">
                  <Link to={"https://github.com/velan19122003"} target="_blank">
                    <img
                      src={require("../Assets/images/github.png")}
                      className="pe-2"
                      alt=""
                    />
                    <span>GitHub</span>
                  </Link>
                </li>
                <li className="socialProfile m-md-2 nav-link">
                  <Link
                    to={"https://www.instagram.com/_velan1912_/"}
                    target="_blank"
                  >
                    <img
                      src={require("../Assets/images/instagram.png")}
                      className="pe-sm-2 pe-1"
                      alt=""
                    />
                    <span>Instagram</span>
                  </Link>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </footer>
    </>
  );
}

export default DevProfile;
