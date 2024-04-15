import React from "react";
import { FridgeData } from "../data/Fridge";
import Navbar from "../components/Navbar";

const FridgePage = () => {
  return (
    <>
      <Navbar />
      <div classname="pagesection">
        {FridgeData.map((item) => {
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
export default FridgePage;
