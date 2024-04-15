import React from "react";
import {WomenswearData} from "../data/Womenswear";
const Womenswear = () => {
  const firstFourImages = WomenswearData.slice(0, 4);
  return (
    <>
    <h2>Women</h2>
    <div className="prosection">
      {firstFourImages.map(({ image }) => {
        return (
          <div className="imagebox">
            <img className="proImage" src={image} />
          </div>
        );
      })}
    </div>
    </>
  );
};
export default Womenswear;
