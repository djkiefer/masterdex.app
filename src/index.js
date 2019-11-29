import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById("root"));
