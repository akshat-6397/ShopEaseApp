import React from "react";
import SaleBanner from "./SaleBanner";
import "./style.scss";

const Body = () => {
  return (
    <div className="body">
      <SaleBanner />
      <div className="ad-banner">
        <img
          alt="banner"
          src="https://static.vecteezy.com/system/resources/previews/000/327/525/original/summer-sale-template-banner-vector-background.jpg"
        />
      </div>
      <hr className="hr-1"></hr>
      <hr className="hr-2"></hr>
      <div className="category-banner">
        <h1>Shop By Category</h1>
      </div>
      <hr className="hr-2" style={{ marginTop: "10px" }}></hr>
      <div className="men-banner">
        <img alt="men-banner" src="https://i.pinimg.com/originals/05/42/59/05425956e846b562dff86f712b70a6f6.png"/>
      </div>
    </div>
  );
};

export default Body;
