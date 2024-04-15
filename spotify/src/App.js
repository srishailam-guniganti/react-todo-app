import React, { useContext, useEffect } from "react";
import Login from "./components/Login";
import "./App.css";
import Spotifyc from "./components/Spotifyc";
import { reducerCases } from "./utils/Constants";
import { StateContext } from "./utils/StateContext";
import { useStateProvider } from "./utils/StateContext";

const Spotify = () => {
  //  const useStateProvider = () => useContext(StateContext);

  const [state, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    console.log(hash);
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      console.log(token);
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [state.token, dispatch]);
  return <div>{state.token ? <Spotifyc /> : <Login />}</div>;
};
export default Spotify;
