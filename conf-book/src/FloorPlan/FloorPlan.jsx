import React from "react";
import Room105 from "./105";
import Room104 from "./104";
import Room101 from "./101";
import Bath from "./Bathrooms";
import info from "./info.js";
import { useState } from "react";

function FloorPlan(props) {

  // const [availone, setAvailableOne] = useState(parseInt(info[0]));
  // const changeAvailabilityHandlerOne = () => {
  //   console.log("i am here >> " + this.availone);
  //   setAvailableOne(!availone);
  // };

  // const [availtwo, setAvailableTwo] = useState(parseInt(info[1]));
  // const changeAvailabilityHandlerTwo = () => {
  //   setAvailableTwo(!availtwo);
  // };

  // var div = document.getElementsByClassName("Room101"),
  //   toggle = false;
  // div.onclick = function () {
  //   toggle = !toggle;
  //   div.style.background = toggle ? "ff0077" : "#ff7700";
  // };
  // div.style.background = "#ff7700";

  return (
    <div id="floorPlan">
      <div id="row-1">
        <Room101 className="Room101" bedNum={101} avail={info[0]}/>
        <Bath className="bath" gender="Women's" />
        <Room104 avail={info[3]} />
        <Room105 avail={info[4]}></Room105>
      </div>
      <div id="row-2">
        <Room101 className="Room101" bedNum={102} avail={info[1]} />
        <Bath gender="Men's" />
        <Room101 className="Room101" bedNum={103} avail={info[2]} />
      </div>
    </div>
  );
}

export default FloorPlan;
