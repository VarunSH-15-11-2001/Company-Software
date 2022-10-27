import React from "react";
import Room105 from "./105";
import Room104 from "./104";
import Room101 from "./101";
import Bath from "./Bathrooms";

function FloorPlan(props) {
  return (
    <div id="floorPlan">
      <div id="row-1">
        <Room101 className="Room101" bedNum={101} />
        <Bath className="bath" gender="Women's" />
        <Room104 />
        <Room105 ></Room105>
      </div>
      <div id="row-2">
        <Room101 className = "Room102" bedNum={102} />
        <Bath gender="Men's" />
        <Room101 className="Room103" bedNum={103} />
      </div>
    </div>
  );
}

export default FloorPlan;
