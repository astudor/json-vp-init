import React from "react";
import "./index.css";
import App from "./App";

import { Engine } from "@c11/engine-react";
import { initialState } from "./structure";
import { mockedAppProducers } from "./mockedApp";

import * as serviceWorker from "./serviceWorker";

const engine = new Engine({
  producers: {
    list: [].concat(mockedAppProducers)
  },
  state: {
    initial: initialState
  },
  view: {
    element: <App />,
    root: "#root"
  }
});

const context = engine.getContext();
window.db = context.db;
console.log("Db", context.db.get("/"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
