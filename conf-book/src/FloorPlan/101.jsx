import React from "react";

function Room101(props) {
  return (
    <div className={props.className}>
      <h1>Room {props.bedNum}</h1>
    </div>
  );
}

export default Room101;
