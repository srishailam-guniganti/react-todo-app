import React from "react";
import {IoLibrary} from 'react-icons/io5';
import {MdHomeFilled,MdSearch} from 'react-icons/md'
import Playlists from "./Playlists";

const Sidebar = () => {
  return (
    <div className="toplinks">
      <div className="logo">
         {/* { <img src="https://1000logos.net/wp-content/uploads/2017/08/Color-Spotify-Logo.jpg"></img>  } */}
      </div>
      <ul>
        <li>
          <MdHomeFilled />
          <span>Home</span>
        </li>
        <li>
          <MdSearch />
          <span>Search</span>
        </li>
        <li>
          <IoLibrary />
          <span>your library</span>
        </li>
      </ul>
      <Playlists />
    </div>
  );
};


export default Sidebar;
