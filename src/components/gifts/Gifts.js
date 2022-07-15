import React, { useState } from "react";
import "./gifts.css";

function Gifts() {
  const [imgup, setImg] = useState("img");
  const [boxbody, setBoxbody] = useState("");
  const [open, setOpen] = useState("");
    
  return (
    <div class="container">
      <div
        class="box"
        onClick={() => {
          setBoxbody("box-body-click");
          setImg("imgup");
          setOpen("open")
        }}
      >
        <img class={imgup} src="https://i.imgur.com/cN0MI53.png" />
        <div className={`box-body ${boxbody}`}>
          <div class={`box-lid ${open}`}>
            <div class="box-bowtie" ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gifts;
