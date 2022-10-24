const Component = (props) => {
    console.log('This is the second point of data flow - in the nested component.');
    return (
      <div>
        <h1>{props.name}</h1>
      </div>
    ); 
  }
  
  export default Component;