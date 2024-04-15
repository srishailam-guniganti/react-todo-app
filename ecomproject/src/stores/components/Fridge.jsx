import React from "react";
import { FridgeData } from "../data/Fridge";
const Fridge = () => {
  const firstFourImages = FridgeData.slice(0, 4);
  return (
    <>
    <h2>Fridges</h2>
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
export default Fridge;
