import React, { useState } from "react";
import Share from "../Share/Share";
import "./gifts.css";

function Gifts({ A }) {
  const [imgup, setImg] = useState("img");
  const [boxbody, setBoxbody] = useState("");
  const [open, setOpen] = useState("");
  const [pop, setPop] = useState("pop");
  const [show, setShow] = useState("show");
  const [share, setShare] = useState("hide");
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const wow = async () => {
    await sleep(2800);
    setPop("show");
  };
  return (
    <div>
      <div class={`gift ${show}`}>
        <h1>Congratulations</h1>
        <h3>Click The Box To Claim Your Gift</h3>
        <div class={`container`}>
          <div
            class="box"
            onClick={() => {
              setBoxbody("box-body-click");
              setImg("imgup");
              setOpen("open");
              wow();
            }}
          >
            <img class={imgup} src="https://i.imgur.com/cN0MI53.png" />
            <div className={`box-body ${boxbody}`}>
              <div class={`box-lid ${open}`}>
                <div class="box-bowtie"></div>
              </div>
            </div>
          </div>
          <div className={pop}>
            <div id="popup1" class="overlay" style={{ display: 1 }}>
              <div class="popup">
                <h2>Congratulations</h2>
                <p>
                  Congratulations you have won a Google Pixel 6 mobile phone
                  Click the order button below to order it
                </p>
                <button
                  type=""
                  onClick={() => {
                    setShow("hide");
                    setShare("show");
                  }}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`share ${share}`}>
        <Share />
      </div>
    </div>
  );
}

export default Gifts;
