import React from "react";
import { MenswearData } from "../data/Menswear";
import Navbar from "../components/Navbar";

const MenPage = () => {
  return (
    <>
      <Navbar />
      <div classname="pagesection">
        {MenswearData.map((item) => {
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
export default MenPage;
