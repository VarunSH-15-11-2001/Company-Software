import React, { useState } from "react";

const Booking = (props) => {
  const [available, setAvailable] = useState(false);
  const availabilityHandler = () => {
    available === false ? setAvailable(true) : setAvailable(false);
  };
  return (
    <div style={{ background: !available ? "red" : "green" }}>
      Book Room
      <br />
      <input type="number"></input>
      <button onClick={availabilityHandler}>Book Now</button>
    </div>
  );
};

export default Booking;
