import React from "react";
import "./Header.css";

function Header() {
  
  return (
    <div className="header">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      <div className="icons">
        <img
          className="header__search"
          src="https://www.evidencepartners.com/wp-content/uploads/Search.png"
          alt=""
        />
        <img
          className="header__lines"
          src="https://www.redeemclinic.co.uk/wp-content/uploads/2016/05/threelines.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
