import React, { useState } from "react";

const Booking = (props) => {
  const [available, setAvailable] = useState(false);
  
  const availabilityHandler = (event) => {
    available === false ? setAvailable(true) : setAvailable(false);
    console.log(event.target.value)
  };
  return (
    <div>
      Book Room
      <br />
      <input type="number" value=""></input>
      <button onClick={availabilityHandler}>Book Now</button>
    </div>
  );
};

export default Booking;
