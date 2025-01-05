import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {

  //Hooks (useState)
  //useState(default Value, Function) )
  const [counter, setCounter] =useState(0);

  // let counter = 5;

  const addValue = () => {
    // console.log("value added", Math.random());
    console.log("clicked", counter); // Value is added in Console but not on webpage
    // React controls the change in UI
    // React updates through Hooks
    // counter = counter + 1;
    setCounter(counter + 1);
  };

  const subValue = () => {
    console.log("decrease", counter);
    setCounter(counter - 1);
  }

  return ( 
    <>
      <h1>Counter App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={subValue}>Subtract Value</button>
    </>
  );
}

export default App;
