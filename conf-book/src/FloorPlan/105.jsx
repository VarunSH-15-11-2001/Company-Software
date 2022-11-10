import React from "react";

function Room105(props) {
  return (
    <div
      id="Room105"
      style={{ backgroundColor: props.avail == 0 ? "red" : "green" }}
    >
      Room 105
    </div>
  );
}

export default Room105;
