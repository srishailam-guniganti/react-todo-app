import React from "react";

import Navbar from "../components/Navbar";
import { WomenswearData } from "../data/Womenswear";

const WomenPage = () => {
  return (
    <>
      <Navbar />
      <div classname="pagesection">
        {WomenswearData.map((item) => {
          return (
            <div>
              <div className="pageimg">
                <img src={item.image} alt="hii"></img>
              </div>
              <div className="promodel">
                {item.product},{item.price}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default WomenPage;
