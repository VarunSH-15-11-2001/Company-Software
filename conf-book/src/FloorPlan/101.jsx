import React from "react";
import { useState } from "react";

function Room101(props) {
  let [temp, setTemp] = useState(props.avail);
  const changeTemp = () => {
    if (temp == "0") temp = "1";
    else temp = "0";
    setTemp(temp);
  };

  if(temp==="1") {
  return (
    <div
      className="Room101"
      onClick={changeTemp}
      style={{ backgroundColor: "green" }}
    >
      <h1>Room {props.bedNum} </h1>
    </div>
  );
  }

  else {
    return (
      <div
        className="Room101"
        onClick={changeTemp}
        style={{ backgroundColor: "red" }}
      >
        <h1>Room {props.bedNum} </h1>
      </div>
    );
  }
    
}

export default Room101;
