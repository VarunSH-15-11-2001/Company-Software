import React from "react";
import { useState } from "react";

function Room105(props) {

  let [temp, setTemp] = useState(props.avail);
  const changeTemp = () => {
    if (temp == "0") temp = "1";
    else temp = "0";
    setTemp(temp);
  };


  if(temp==="1") {
    return (
      <div
        id="Room105"
        onClick = {changeTemp}
        style={{ backgroundColor: "green" }}
      >
        Room 105
      </div>
    );
  }
  else {
    return (
      <div
        id="Room105"
        onClick = {changeTemp}
        style={{ backgroundColor: "red" }}
      >
        Room 105
      </div>
    );
  }
}

export default Room105;
