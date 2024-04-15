import React, { usestate } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Gents } from "../data";
import Banner from "../components/banner";
const Mainpage = () => {
  return (
    <div>
      <h1>React shopping</h1>
      <Header />
      <Banner/>
      <Footer {...Gents} />
    </div>
  );
};
export default Mainpage;
