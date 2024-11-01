import React, { useState } from "react";
import "../Assets/css/style.css";
import Search from "./Search";
import NavBar from "./NavBar";
import DevProfile from "./DevProfile";

function Home() {
  let [favs, setFavs] = useState(JSON.parse(localStorage.getItem("favs")));

  return (
    <>
      <NavBar />
      <Search fav={[favs, setFavs]} />
      <DevProfile />
    </>
  );
}

export default Home;
