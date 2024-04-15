import React from "react";
const Footer = ({ title, image1, image2, image3 }) => {
  return (
    <>
      <div>{title}</div>
      <img src={image1} />
      <img src={image2} />
      <img src={image3} />
    </>
  );
};
export default Footer;
