import React from "react";
import { mobileData } from "../data/mobile";
const Mobiles = () => {
    const firstFourImages=mobileData.slice(0,4)
    return (
        <>
        <h2>Mobiles</h2>
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
}
export default Mobiles
