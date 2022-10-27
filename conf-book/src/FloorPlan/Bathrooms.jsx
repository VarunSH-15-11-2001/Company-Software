import React from "react";

function Bath(props) {
  return (
    <div className="bath" id={`bath-${props.size}`}>
      <h1>{props.gender} Bathroom</h1>
    </div>
  );
}

export default Bath;
