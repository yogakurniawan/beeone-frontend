import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import Routes from "app/routes";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
