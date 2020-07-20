import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import App from "./utils/App";
import "font-awesome/css/font-awesome.css";
import "../src/utils/index.css";
console.log("superman", process.env.REACT_APP_NAME);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
