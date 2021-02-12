//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "jquery";
import "popper.js";
import "bootstrap";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "bootstrap";
import "jquery";
import "popper.js";
//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
