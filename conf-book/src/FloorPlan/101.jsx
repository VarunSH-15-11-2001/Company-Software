import React from "react";

function Room101(props) {
  let temp = props.avail;

  const changeTemp = () => {
    if(temp==="0") temp ="1";
    else temp ="0";
  };
  return (
    <div
      className="Room101"
      onClick = {changeTemp}
      style={{ backgroundColor: temp === "0" ? "red" : "green" }}
    >
      <h1>Room {props.bedNum} </h1>
    </div>
  );
}

export default Room101;
