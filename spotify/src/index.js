import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Spotify from "./App";
import StateProvider from "./utils/StateContext";
import reducer, { initialstate } from "./utils/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialstate} reducer={reducer}>
      <Spotify />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
