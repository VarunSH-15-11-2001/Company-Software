import React from "react";
import { useState } from "react";

function Room104(props) {

  let [temp, setTemp] = useState(props.avail);
  const changeTemp = () => {
    if (temp == "0") temp = "1";
    else temp = "0";
    setTemp(temp);
  };

  if(temp==="1") {
    return (
      <div
        id="Room104"
        onClick={changeTemp}
        style={{ backgroundColor:"green" }}
      >
        <h1>Room 104</h1>
      </div>
    );
  }
  else {
    return (
      <div
        id="Room104"
        onClick={changeTemp}
        style={{ backgroundColor:"red"}}
      >
        <h1>Room 104</h1>
      </div>
    );
  }
}

export default Room104;
