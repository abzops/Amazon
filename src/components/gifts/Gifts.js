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
        <hr style={{width:"100%"}} />
        <div className="wow">
          <div className="comments">
            <h2>comments</h2>
            <div className="users">
              <div className="names">
                <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
                <h7>Shine</h7>
              </div>
              <div className="star">
                <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              </div>
              <div className="texts">
                <span>
                  <b>I received it today, ThankYou very much!</b>
                </span>
                <br />
                <span>
                  I got the gift in the morning I am so happy ThankYou Amazon
                </span>
                <br />
                <span>
                  <b>789 people found this helpful</b>
                </span>
              </div>
            </div>
            <div className="users">
              <div className="names">
                <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
                <h7>Athullya</h7>
              </div>
              <div className="star">
                <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              </div>
              <div className="texts">
                <span>
                  <b>Wow, this is amazing. I got a brand new airpods.</b>
                </span>
                <br />
                <span>
                  I thought it was a scam, but it arrived this morning!
                </span>
                <br />
                <span>
                  <b>145 people found this helpful</b>
                </span>
              </div>
            </div>
            <div className="users">
              <div className="names">
                <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
                <h7>Evan Atkins</h7>
              </div>
              <div className="star">
                <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              </div>
              <div className="texts">
                <span>
                  <b>Real deal, but...</b>
                </span>
                <br />
                <span>
                  You must follow the guidelines exactly as requested in order
                  to get your gift! Enjoy ppl
                </span>
                <br />
                <span>
                  <b>872 people found this helpful</b>
                </span>
              </div>
            </div>
            <div className="users">
              <div className="names">
                <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
                <h7>John Gatins</h7>
              </div>
              <div className="star">
                <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              </div>
              <div className="texts">
                <span>
                  <b>First time, baby!!</b>
                </span>
                <br />
                <span>
                  Fantastic! i had never won anything before! It feels amazing,
                  lol.
                </span>
                <br />
                <span>
                  <b>322 people found this helpful</b>
                </span>
              </div>
            </div>
            <div className="users">
              <div className="names">
                <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
                <h7>Anmariya</h7>
              </div>
              <div className="star">
                <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              </div>
              <div className="texts">
                <span>
                  <b>Got an iPhone 13 Pro</b>
                </span>
                <br />
                <span>
                  At first I thought it was a fake, but finally I received my
                  gift. I've already told friends, so they can win too.
                </span>
                <br />
                <span>
                  <b>112 people found this helpful</b>
                </span>
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
