// rfce
import React, { useEffect, useState } from "react";
import "./Share.css";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdCancelPresentation } from "react-icons/md";
import { WhatsappShareButton } from "react-share";
import Conformation from "../Conformation/Conformation";
function Share() {
  const [pers, setPers] = useState(0);
  const [show, setShow] = useState("show");
  const [show2, setShow2] = useState("hide");
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const navToHome = () => {
    window.location.href = "#";
  };
  const shift = () => {
    if (pers === 80) {
      setShow("hide");
      setShow2("show");
    }
  };

  return (
    <div className="share-container">
      <div className={`share-box ${show}`}>
        <div className="head">
          <h2>Share to conform order</h2>
          <p>
            Please Invite your friends To make sure you get the chance to win
            this Gift.
          </p>
        </div>
        <div className="pmain">
          <div className="mess">
            <h3>Share Five Times To Five Groups Or Peoples</h3>
          </div>
          <div className="progress">
            <div class="meter">
              <span style={{ width: pers + "%" }}></span>
            </div>
            <h4 className="">{pers + "%"}</h4>
          </div>
        </div>
        <div className="buttons">
          <div
            className="whatsapp"
            onClick={async () => {
              await sleep(3000);
              setPers(pers + 20);
              shift();
              return;
            }}
          >
            <FaWhatsappSquare style={{ fontSize: "50px", color: "white" }} />
            <h3>Share to whatsapp</h3>
            <WhatsappShareButton
              title={
                "Amazon Giveaway please click the link below to achieve so many Gift for free Don't Wast time "
              }
              url={"https://amazo0n.web.app/"}
            />
          </div>
          <div
            className="cancel"
            onClick={() => {
              navToHome();
            }}
          >
            <MdCancelPresentation
              style={{ fontSize: "50px", color: "white" }}
            />
            <h3>Cancel The Order</h3>
          </div>
        </div>
      </div>
      <div className={`conform ${show2}`}>
        <Conformation />
      </div>
    </div>
  );
}

export default Share;
