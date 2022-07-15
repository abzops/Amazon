import React, { useState, useEffect } from "react";
import "./Home.css";
import loading from "../Home/Spinner-1s-200px.gif";
import Gifts from "../gifts/Gifts";

function Home() {
  const [q1, setQ1] = useState("1");
  const [q2, setQ2] = useState("0");
  const [q3, setQ3] = useState("0");
  const [q4, setQ4] = useState("0");
  const [check, setCheck] = useState("0");
  const [l1, setL1] = useState("0");
  const [l2, setL2] = useState("0");
  const [l3, setL3] = useState("0");
  const [showGift, setShowGift] = useState("1");
  const [showHome, setShowHome] = useState("1");

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
  const doSomething = async () => {
    await sleep(2000);
    setL1("1");
    await sleep(2000);
    setL2("1");
    await sleep(2000);
    setL3("1");
    await sleep(2000);
    setCheck("0");
    setShowHome("none");
    setShowGift("1");
  };

  // console.log("value:",value);
  return (
    <div>
      <div className="home" style={{ display: showHome }}>
        <div className="home__container">
          <img
            className="home__image"
            src="https://i.imgur.com/Y247Ukm.jpg"
            alt=""
          />
        </div>
        <hr />
        <div className="home__text">
          <h1>Hello,</h1>
          <p>
            We are happy to announce that We will be giving away 10,000 products
            that can no longer be sold because they have been returned by our
            customers.
            <br />
            <br />
            Answer this short quiz, find the hidden prize and win an amazing
            exclusive Gift for free!
          </p>
          <hr />
          <div className="ques">
            <div className="q1" style={{ opacity: q1, zIndex: q1 }}>
              <p>
                <b>Question 1 of 4:</b> Do you know Amazon?
              </p>
              <div className="bdiv">
                <button
                  className="button"
                  onClick={() => {
                    setQ2("1");
                    setQ1("0");
                  }}
                >
                  YES
                </button>
                <button
                  className="button"
                  onClick={() => {
                    setQ2("1");
                    setQ1("0");
                  }}
                >
                  NO
                </button>
              </div>
            </div>
            <div className="q1" style={{ opacity: q2, zIndex: q2 }}>
              <p>
                <b>Question 2 of 4:</b> Are you a regular buyer from Amazon?
              </p>
              <div className="bdiv">
                <button
                  className="button"
                  onClick={() => {
                    setQ3("1");
                    setQ2("0");
                  }}
                >
                  YES
                </button>
                <button
                  className="button"
                  onClick={() => {
                    setQ3("1");
                    setQ2("0");
                  }}
                >
                  NO
                </button>
              </div>
            </div>
            <div className="q1" style={{ opacity: q3, zIndex: q3 }}>
              <p>
                <b>Question 3 of 4:</b> Do you like Amazon User interface?
              </p>
              <div className="bdiv">
                <button
                  className="button"
                  onClick={() => {
                    setQ4("1");
                    setQ3("0");
                  }}
                >
                  YES
                </button>
                <button
                  className="button"
                  onClick={() => {
                    setQ4("1");
                    setQ3("0");
                  }}
                >
                  NO
                </button>
              </div>
            </div>
            <div className="q1" style={{ opacity: q4, zIndex: q4 }}>
              <p>
                <b>Question 4 of 4:</b> Does Amazon deliver to you on time?
              </p>
              <div className="bdiv">
                <button
                  className="button"
                  onClick={() => {
                    setCheck("1");
                    setQ4("0");
                    doSomething();
                  }}
                >
                  YES
                </button>
                <button
                  className="button"
                  onClick={() => {
                    setCheck("1");
                    setQ4("0");
                    doSomething();
                  }}
                >
                  NO
                </button>
              </div>
            </div>
            <div className="check" style={{ opacity: check, zIndex: check }}>
              <h3>Checking your answers...</h3>
              <img src={loading} />
              <p style={{ opacity: l1 }}>IP Address verified...</p>
              <p style={{ opacity: l2 }}>All answers verified...</p>
              <h2 style={{ opacity: l3 }}>You got a price!</h2>
            </div>
          </div>
        </div>
        <hr />
        <div className="comments">
          <h2>comments</h2>
          <div className="users">
            <div className="names">
              <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
              <h7>Abhinand</h7>
            </div>
            <div className="star">
              <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              <span>
                <b>Amazing</b>
              </span>
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
                <b>232 people found this helpful</b>
              </span>
            </div>
          </div>
          <div className="users">
            <div className="names">
              <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
              <h7>Abhinand</h7>
            </div>
            <div className="star">
              <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              <span>
                <b>Amazing</b>
              </span>
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
                <b>232 people found this helpful</b>
              </span>
            </div>
          </div>
          <div className="users">
            <div className="names">
              <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
              <h7>Abhinand</h7>
            </div>
            <div className="star">
              <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              <span>
                <b>Amazing</b>
              </span>
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
                <b>232 people found this helpful</b>
              </span>
            </div>
          </div>
          <div className="users">
            <div className="names">
              <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
              <h7>Abhinand</h7>
            </div>
            <div className="star">
              <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              <span>
                <b>Amazing</b>
              </span>
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
                <b>232 people found this helpful</b>
              </span>
            </div>
          </div>
          <div className="users">
            <div className="names">
              <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
              <h7>Abhinand</h7>
            </div>
            <div className="star">
              <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              <span>
                <b>Amazing</b>
              </span>
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
                <b>232 people found this helpful</b>
              </span>
            </div>
          </div>
          <div className="users">
            <div className="names">
              <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
              <h7>Abhinand</h7>
            </div>
            <div className="star">
              <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              <span>
                <b>Amazing</b>
              </span>
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
                <b>232 people found this helpful</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="gift" style={{ display: showGift }}>
        <h1>Congratulations</h1>
        <h3>Click The Box To Claim Your Gift</h3>

        <Gifts />
        <hr />
        <div className="comments">
          <h2>comments</h2>
          <div className="users">
            <div className="names">
              <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
              <h7>Abhinand</h7>
            </div>
            <div className="star">
              <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              <span>
                <b>Amazing</b>
              </span>
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
                <b>232 people found this helpful</b>
              </span>
            </div>
          </div>
          <div className="users">
            <div className="names">
              <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
              <h7>Abhinand</h7>
            </div>
            <div className="star">
              <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              <span>
                <b>Amazing</b>
              </span>
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
                <b>232 people found this helpful</b>
              </span>
            </div>
          </div>
          <div className="users">
            <div className="names">
              <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
              <h7>Abhinand</h7>
            </div>
            <div className="star">
              <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              <span>
                <b>Amazing</b>
              </span>
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
                <b>232 people found this helpful</b>
              </span>
            </div>
          </div>
          <div className="users">
            <div className="names">
              <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
              <h7>Abhinand</h7>
            </div>
            <div className="star">
              <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              <span>
                <b>Amazing</b>
              </span>
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
                <b>232 people found this helpful</b>
              </span>
            </div>
          </div>
          <div className="users">
            <div className="names">
              <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
              <h7>Abhinand</h7>
            </div>
            <div className="star">
              <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              <span>
                <b>Amazing</b>
              </span>
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
                <b>232 people found this helpful</b>
              </span>
            </div>
          </div>
          <div className="users">
            <div className="names">
              <img src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png" />
              <h7>Abhinand</h7>
            </div>
            <div className="star">
              <img src="https://latchel.com/wp-content/uploads/2022/01/amazon-5-stars-png-7-1.png" />
              <span>
                <b>Amazing</b>
              </span>
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
                <b>232 people found this helpful</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
