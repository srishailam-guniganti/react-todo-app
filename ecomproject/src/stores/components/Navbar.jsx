import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navsection">
        <div className="title">
          <h2>E-mart</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="search.." />
        </div>
        <div className="user">
          <div className="userdetails">signIn/signUp</div>
          <div className="cart">cart</div>
        </div>
      </div>
      <div className='submenu' >
        <ul>
          <Link to="/mobiles">
            <li>Mobiles</li>
          </Link>
          <Link to="/Fridge">
            <li>Fridges</li>
          </Link>
          <Link to="/Watches">
            <li>Watches</li>
          </Link>
          <Link to="/Mens">
            <li>Men</li>
          </Link>
          <Link to="/Women">
            <li>Women</li>
          </Link>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
