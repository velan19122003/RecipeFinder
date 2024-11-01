import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import InputAdornment from "@mui/material/InputAdornment";
// import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useNavigate } from "react-router-dom";

function Search(props) {
  let [recipeName, setRecipeName] = useState("");
  let navigate = useNavigate();
  let [isLoading, setIsLoading] = useState(false);
  let btnContent = useState("Search Your Recipe");
  // console.log(props.fav[0]);

  async function searchRecipe(name) {
    let url = `https://api.edamam.com/search?q=${name}&app_id=6ed3e781&app_key=a7a140e2f4d24b9190b66cfb7e57bd95&from=0&to=100&calories=591-722&health=alcohol-free`;
    let data;
    if (name.trim() !== "") {
      setIsLoading(true);

      try {
        let response = await fetch(url);
        if (response.ok) {
          data = await response.json();
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
          // console.log(data.hits[0].recipe);
          console.log(data.hits.length);
          if (data.hits.length !== 0) {
            navigate("/result", {
              state: { recipes: data.hits, fav: props.fav[0] },
              replace: true,
            });
          } else {
            navigate("/result", {
              state: { recipes: 0, fav: props.fav[0] },
              replace: true,
            });
          }
        } else {
          throw new Error("Unable to fetch");
        }
      } catch (err) {
        console.log(err);
        return;
      }
    } else {
      setIsLoading(false);
    }
  }
  //   onChange={(e) => {
  //     setRecipeName(e.target.value);
  //   }}

  return (
    <>
      <section className="container-fluid bgImg">
        <section className="row">
          <section className="col-12 d-flex flex-column justify-content-center align-items-center p-5  button">
            <input
              type="text"
              className="p-3"
              placeholder="Recipe name"
              onChange={(e) => {
                setRecipeName(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.key === "Enter" && recipeName !== "") {
                  searchRecipe(recipeName);
                }
              }}
            />
            {isLoading ? (
              <>
                <button class="btn btn-primary" type="button">
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  Loading...
                </button>
              </>
            ) : (
              <button
                className="searchBtn bg-primary p-2"
                onClick={(e) => {
                  searchRecipe(recipeName);
                }}
              >
                Search Your Recipe
              </button>
            )}
          </section>
        </section>
      </section>
    </>
  );
}

export default Search;
