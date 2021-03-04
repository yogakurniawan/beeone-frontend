import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "app/store";
import "./index.css";

function render() {
  const Routes = require("./app/routes").default;

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./app/routes", render);
}
