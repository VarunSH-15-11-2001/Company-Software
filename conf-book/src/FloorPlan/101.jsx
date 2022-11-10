import React from "react";

function Room101(props) {
  console.log("101->" + props.avail[0]);
  return (
<<<<<<< HEAD
    <div
      className="Room101"
      style={{ backgroundColor: props.avail == 0 ? "red" : "green" }}
    >
      <h1>Room {props.bedNum} </h1>
=======
    <div className={props.className}>
      <h1>Room {props.bedNum}</h1>
>>>>>>> 7e79af8392cb3319ee3361fe4a3b95b1a079edfa
    </div>
  );
}

export default Room101;
