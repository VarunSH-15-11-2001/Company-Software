import Booking from "./BookingButton/BookingButton";
import Component from "./Component1/comp";
import Floor from "./FloorPlan/Floor";
import info from "./FloorPlan/info.js";

// read dbms here
// assign availabilities
// pas as props to booking

function App() {
  // console.log('This is where things begin - in the main app component');

  return (
    <div>
      <h1>Temporay header</h1>
      <Booking avail={info}></Booking>
      <Component name="hello"></Component>
      <Floor />
    </div>
  );
}

export default App;
