import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateContext";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import { reducerCases } from "../utils/Constants";

const Spotifyc = () => {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const getuserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getuserInfo();
  }, [dispatch, token]);
  return (
    <div className="TotalBody">
      <div className="container">
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="mainpage">
          <Navbar />
          <div className="Body">
            <Body />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Spotifyc;
