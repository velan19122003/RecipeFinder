import React from "react";
import "../Assets/css/style.css";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  let navigate = useNavigate();
  return (
    <>
      <header className="container-fluid" id="top">
        <section className="row">
          <section className="col-12 col-md-6 col-lg-6 mt-3 pt-lg-3">
            <h1>Find Your Recipe</h1>
          </section>
          <section className="col-12 col-md-12 col-lg-6 mt-3 pt-lg-3 pe-lg-5 pe-1 d-flex justify-content-sm-start justify-content-md-start justify-content-lg-end navBar ">
            <ul className="nav">
              <li>
                <Link to={"/"} className="text-white">
                  SEARCH YOUR RECIPE
                </Link>
              </li>
              <li>
                <Link to={"/favourites"} className="text-white">
                  FAVOURITES
                </Link>
              </li>
            </ul>
          </section>
        </section>
      </header>
    </>
  );
}

export default NavBar;
