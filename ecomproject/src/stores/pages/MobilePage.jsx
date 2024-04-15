import React, { useState } from "react";
import { mobileData } from "../data/mobile";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const MobilePage = () => {
  const [selectedProduct, setselectedProduct] = useState([]);
  let mobiles = mobileData;

  console.log("selectedProduct :", selectedProduct);

  const handleSelect = (selectedValue) => {
    console.log(selectedValue);
    setselectedProduct((old) => [...old, selectedValue]);
  };

  // const returnProduct =
  //   selectedProduct !== ''
  //     ? mobiles.filter((mobile) => {
  //         return mobile.price === selectedProduct;
  //       })
  //     : mobiles;

  let returnProduct = mobiles;

  if (selectedProduct.length <= 0) {
    returnProduct = mobiles;
  } else {
    returnProduct = mobiles.filter((mobile) => {
      return selectedProduct.includes(mobile.price);
    });
  }

  return (
    <>
      <Navbar />
      <div className="pro-selected">
        {mobiles.map((phone) => {
          return (
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct === phone.price}
                  value={phone.price}
                  onChange={() => handleSelect(phone.price)}
                />
                {phone.price}
              </label>
            </div>
          );
        })}
      </div>
      <div className="pagesection">
        {returnProduct.map((item) => {
          return (
            <div className="highlight">
              <Link to={"/Mobiles/" + item.id}>
                <div className="pageimg">
                  <img src={item.image} alt="hii"></img>
                </div>
              </Link>
              <div className="promodel">{item.product}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default MobilePage;
