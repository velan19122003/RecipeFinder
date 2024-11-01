import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";

function Results() {
  let location = useLocation();
  let navigate = useNavigate();
  let data = location.data === 0 ? 0 : location.state || {};

  useEffect(() => {
    const handlePopState = () => {
      navigate("/", { replace: true });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);
  return (
    <>
      <NavBar />
      {/* <Search /> */}
      <ItemCard data={data} />
    </>
  );
}

export default Results;
