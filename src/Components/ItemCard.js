import React, { useEffect, useState } from "react";
// import "react-loading-skeleton/dist/skeleton.css";
import { Link, useNavigate } from "react-router-dom";

import "../Assets/css/style.css";

function ItemCard(props) {
  let navigate = useNavigate();
  let data = props.data;
  let [favs, setFavs] = useState(JSON.parse(localStorage.getItem("favs")));
  // console.log(props);
  let favRecipeIds = JSON.parse(localStorage.getItem("favs")).map(
    (item, index) => {
      return item.recipe.uri.match(/recipe_[a-z0-9]+/i)[0];
    }
  );

  let fn = props.data.fn;

  // let [change, setChange] = props.data.c;
  // console.log(props.data);

  // console.log(favRecipeIds);

  return (
    <>
      {data.recipes && data.recipes !== 0 ? (
        <div className="container-fluid" id="top">
          <div className="row d-flex justify-content-center">
            {data.recipes.map((item, index) => {
              return (
                <section
                  onClick={() => {
                    navigate("/overview", {
                      state: { itemData: data.recipes[index].recipe },
                    });
                  }}
                  className="card itemc col-xl-2 pointer-event col-lg-2 col-md-3 col-sm-4 col-6 m-2"
                  key={index}
                >
                  <img
                    src={
                      favRecipeIds.includes(
                        data.recipes[index].recipe.uri.match(
                          /recipe_[a-z0-9]+/i
                        )[0]
                      )
                        ? require("../Assets/images/love.png")
                        : require("../Assets/images/heart.png")
                    }
                    width={25}
                    height={25}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (fn) {
                        fn();
                      }
                      if (e.target.classList.contains("fav")) {
                        if (
                          favRecipeIds.includes(
                            data.recipes[index].recipe.uri.match(
                              /recipe_[a-z0-9]+/i
                            )[0]
                          )
                        ) {
                          const updatedFavs = favs.filter((item, i) => {
                            if (
                              item.recipe.uri === data.recipes[index].recipe.uri
                            ) {
                              return false;
                            }
                            return true;
                          });

                          localStorage.setItem(
                            "favs",
                            JSON.stringify(updatedFavs)
                          );

                          setFavs(updatedFavs);
                        } else {
                          setFavs((v) => {
                            const updatedFavs = [...v, data.recipes[index]];
                            localStorage.setItem(
                              "favs",
                              JSON.stringify(updatedFavs)
                            );
                            return updatedFavs;
                          });
                        }
                      }
                    }}
                    className="fav position-absolute end-0 me-3 mt-3"
                    alt=""
                  />
                  <img
                    className="image-fluid card-img-top mt-5 rounded"
                    src={data.recipes[index].recipe.image}
                    alt=""
                  />
                  <section className="card-body">
                    <h6 key={index} className="card-title">
                      {data.recipes[index].recipe.label}
                    </h6>
                    <p className="card-text">
                      Source: {data.recipes[index].recipe.source}
                    </p>
                  </section>

                  <section className="d-flex justify-content-around pb-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        navigate("/overview", {
                          state: {
                            itemData: data.recipes[index].recipe,
                          },
                        });
                      }}
                    >
                      Details
                    </button>
                    <Link to={data.recipes[index].recipe.url} target="blank">
                      <button
                        type="button"
                        className="btn btn-warning text-white"
                      >
                        Source
                      </button>
                    </Link>
                  </section>
                </section>
              );
            })}
          </div>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-up back"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
              />
            </svg>
          </a>{" "}
        </div>
      ) : (
        <div className="container p-5 d-flex justify-content-center align-items-center">
          No result for your search!
        </div>
      )}
    </>
  );
}

export default ItemCard;
