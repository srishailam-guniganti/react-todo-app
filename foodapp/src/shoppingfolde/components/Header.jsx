import React from "react";
const Header = () => {
  return (
    <div className="headersection">
      <div className="left">
        <div className="title">
          <h2>ShoppingMall</h2>
        </div>
      </div>
      <div className="centre">
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Child</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="search">
        <input type="text" placeholder="itemsearch" />
      </div>
      <div className="right">
        <div className="btn">signin/signup</div>
        <div className="btn">cart</div>
      </div>
    </div>
  );
};
export default Header;
