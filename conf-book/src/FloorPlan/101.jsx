import React from "react";

function Room101(props) {
  console.log("101->" + props.avail[0]);
  return (
    <div
      className="Room101"
      style={{ backgroundColor: props.avail == 0 ? "red" : "green" }}
    >
      <h1>Room {props.bedNum} </h1>
    </div>
  );
}

export default Room101;
