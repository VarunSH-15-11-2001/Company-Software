import React from "react";
import fromHere from "./Floor.module.css";
import Indx from "./index";

const Floor = (props) => {
  let floorNumber = 2;
  let styles;
  if (floorNumber === 1) {
    styles = fromHere.floor1 + " " + fromHere.gren;
  } else {
    styles = fromHere.floor2;
  }

  return (
    <div>
      <Indx />
    </div>
  );
};

export default Floor;
