import React from "react";

function Room104(props) {
  return (
    <div
      id="Room104"
      style={{ backgroundColor: props.avail == 0 ? "red" : "green" }}
    >
      <h1>Room 104</h1>
    </div>
  );
}

export default Room104;
