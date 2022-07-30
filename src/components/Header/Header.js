import React from "react";
import "./Header.css";
import { AiOutlineUser, AiOutlineMenu } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

function Header() {
  return (
    <div className="header">
      <div className="leftIcons">
        <AiOutlineMenu style={{ color: "white", fontSize: "40px" }} />
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </div>  
      <div className="rightIcons">
        <AiOutlineUser style={{ color: "white", fontSize: "40px",padding:"10px" }} />
        <BsCart2 style={{ color: "white", fontSize: "40px",padding:"10px" }} />
      </div>
    </div>
  );
}

export default Header;
