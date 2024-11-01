import React from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

function Overview(props) {
  let location = useLocation();
  let data = location.state || {};

  // console.log(data);

  return (
    <>
      <NavBar />
      <div className="container-fluid p-3">
        <div className="row">
          <p className="p-3 card col-12 col-sm-12 col-md-12 fw-bold">
            {data.itemData.label}
            <span className="badge bg-primary text-capitalize w-5 position-absolute end-0 me-2">
              {data.itemData.cuisineType}
            </span>
          </p>
        </div>
        <div className="row d-flex align-items-start justify-content-center">
          {/* <button
            className="btn d-flex gap-2 justify-content-center btn-primary w-50 mb-3"
            onClick={(e) => {}}
          >
            <span>
              <img
                style={{ height: 20, width: 20 }}
                className="d-inline"
                src={require("../Assets/images/heart.png")}
                alt=""
              />
            </span>
            Add to Favourites
          </button> */}
          <img
            src={data.itemData.image}
            className="img-fluid img-thumbnail  col-6"
            alt=""
            style={{ width: 350, height: 350 }}
          />
          <div className="row col-6">
            <p>
              <span className="badge bg-info">Diet Labels </span>
              {"           "}

              {data.itemData.dietLabels.length !== 0
                ? data.itemData.dietLabels
                    .map((item) => {
                      return item;
                    })
                    .join(", ")
                : "Nil"}
            </p>

            <p className="row card ms-1">
              <span className="badge bg-success m-1">Health Labels </span>

              {data.itemData.healthLabels
                .map((item) => {
                  return item;
                })
                .join(", ")}
            </p>
            <div className="row d-flex flex-column align-items-start justify-content-center">
              <table className="table d-flex flex-column justify-content-center ">
                <thead className="m-2">
                  <th>Ingredients</th>
                </thead>
                <tbody>
                  {data.itemData.ingredients.length !== 0
                    ? data.itemData.ingredients.map((item) => {
                        return (
                          <tr>
                            <td> {item.text}</td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
