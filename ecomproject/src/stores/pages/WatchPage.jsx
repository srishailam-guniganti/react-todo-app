import React from "react";
import { WatchesData} from "../data/Watches";
import Navbar from "../components/Navbar";

const WatchPage = () => {
  return (
    <>
      <Navbar />
      <div classname="pagesection">
        {WatchesData.map((item) => {
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
export default WatchPage;
