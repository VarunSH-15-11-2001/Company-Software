import React from "react";
import Room105 from "./105";
import Room104 from "./104";
import Room101 from "./101";
import Bath from "./Bathrooms";
import info from "./info.js";

function FloorPlan(props) {
  return (
    <div id="floorPlan">
      <div id="row-1">
        <Room101 className="Room101" bedNum={101} avail={info[0]} />
        <Bath className="bath" gender="Women's" avail={info[3]} />
        <Room104 />
        <Room105 avail={info[4]}></Room105>
      </div>
      <div id="row-2">
        <Room101 className="Room101" bedNum={102} avail={info[1]} />
        <Bath gender="Men's" />
        <Room101 className="Room101" bedNum={103} avail={info[2]} />
      </div>
    </div>
  );
}

export default FloorPlan;
