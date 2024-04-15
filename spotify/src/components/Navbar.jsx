import React from "react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useStateProvider } from "../utils/StateContext";

const Navbar = () => {
  const [{ userInfo }] = useStateProvider();
  return (
    <div className="Navbar">
      <div className="search_bar">
        <span className="search_svg">
          <FaSearch />
        </span>
        <input type="text" placeholder="Artits,songs or podcasts" />
      </div>
      <div className="avatar">
        <CgProfile />
        <span>{userInfo?.userName}</span>
      </div>
    </div>
  );
};
export default Navbar;
