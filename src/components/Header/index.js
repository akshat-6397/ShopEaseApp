import React, { useState } from "react";
import "./style.scss";
import brandLogo from "../../utils/Images/BrandLogo.png";
import Hamburger from "./Hamburger";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import LoginCard from "./LoginCard";

const Header = () => {
  const [islogin, setIslogin] = useState(false);
  return (
    <>
      <div className="header">
        <div>
          <Hamburger />
        </div>
        <img className="brandLogo" alt="logo" src={brandLogo} />
        <div className="right-section">
          {/* <div className="cart"><AiOutlineShoppingCart style={{ height: "25px", width: "25px" }} /><span>0</span></div> */}
          <div className="cart"><AiOutlineShoppingCart style={{ height: "25px", width: "25px", cursor: 'pointer' }} /></div>
          <AiOutlineHeart style={{ height: "25px", width: "25px", cursor: 'pointer' }} />
          <CgProfile
            onClick={() => setIslogin(!islogin)}
            style={{ height: "25px", width: "25px", cursor: 'pointer' }}
          />
        </div>
      </div>
      <div className={`login-card-wrapper ${islogin ? "trans1" : "trans2"}`}>
        <LoginCard />
      </div>
    </>
  );
};

export default Header;
