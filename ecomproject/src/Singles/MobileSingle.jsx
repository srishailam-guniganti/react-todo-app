import React from "react";
import { useParams } from "react-router-dom";
import { mobileData } from "../stores/data/mobile";
const MobileSingle = () => {
  const params = useParams();
  const product = mobileData.find((item) => item.id === params.id);
  console.log("product", product);
  return (
    <div className="ind-page">
      <div className="ind-image">
        <img src={"/" + product.image } alt="hello"></img>
      </div>
      <div className="ind-price">
        <h2>{product.price}</h2>
      </div>
      <div className="ind-description">
        <p>{product.description}</p>
      </div>
      <div className="description">{product.description}</div>
    </div>
  );
};
export default MobileSingle;
