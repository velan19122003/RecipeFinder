import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (!JSON.parse(localStorage.getItem("favs"))) {
  localStorage.setItem("favs", JSON.stringify([]));
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
