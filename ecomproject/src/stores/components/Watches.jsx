import React from "react";
import { WatchesData } from "../data/Watches";
const Watches = () => {
  const firstFourImages = WatchesData.slice(0, 4);
  return (
    <>
    <h2>Watches</h2>
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
export default Watches;
