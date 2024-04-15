import React from "react";
import { MenswearData } from "../data/Menswear";
const Menswear = () => {
  const firstFourImages = MenswearData.slice(0, 4);
  return (
    <>
    <h2>Mewn</h2>
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
export default Menswear;
