import "./ExpenseForm.css" ;

const Component = (props) => {
    // console.log('This is the second point of data flow - in the nested component.');
    let ble;

    const submitHandle = (event) => {
      event.preventDefault();
      ble=event.target.value;
    };

    return (
      <div>
        <form>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Floor </label>
              <input
                type="number"
                min="1"
                step="1"
                value ={ble}
              />
            </div>
            {/* <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                
              />
            </div> */}
          </div>
          <div className="new-expense__actions">
            <button type="submit" onClick={submitHandle}>Display details</button>
          </div>
        </form>
      </div>
    ); 
  }
  
  export default Component;