import Component from "./Component1/comp";
import Floor from "./FloorPlan/Floor"



function App() {
  // console.log('This is where things begin - in the main app component');
  return (
    <div>
      <h1>Temporay header</h1>
      <Component name="hello"></Component>
      <Floor />
      
    </div>
  );
}

export default App;
