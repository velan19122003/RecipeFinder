import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ItemCard from "./ItemCard";

function Favourites() {
  let [favs, setFavs] = useState(JSON.parse(localStorage.getItem("favs")));
  let [change, setChange] = useState(false);
  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs")));
  }, [change]);

  const rmfav = () => {
    setChange((v) => !v);
  };
  return (
    <>
      <NavBar />
      {favs.length !== 0 ? (
        <ItemCard data={{ recipes: favs, fn: rmfav }} />
      ) : (
        <p
          style={{ height: 100 }}
          className="d-flex justify-content-center align-items-center"
        >
          No Favourites
        </p>
      )}
    </>
  );
}

export default Favourites;
