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
      <div className="banners">
        <div className="men-banner">
            <img alt="men-banner" src="https://i.pinimg.com/originals/05/42/59/05425956e846b562dff86f712b70a6f6.png"/>
        </div>
        <div className="women-banner">
            <img alt="women-banner" src="http://psdfreedownload.com/wp-content/uploads/2017/10/Free_Fashion_-Clothes_Banner_Psd_Full_Preview.jpg"/>
        </div>
        <div className="kids-banner">
            <img alt="kids-banner" src="https://web-bazaar.netlify.app/static/media/kidsImage%20(1).7ae41c50045144004252.jpg"/>
        </div>
      </div>
    </div>
  );
};

export default Body;
