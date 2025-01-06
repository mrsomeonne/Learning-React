/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css";
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Manish",
    age: 21
  }
  let myArr = [1, 2, 3, 4, 5]


  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      {/* <Card channel="PropsDemo" someObj={myObj} someArr={myArr}/> */}
      <Card username="PropsDemo" position="Founder" />
      <Card username="SecondPropsDemo" position="CEO" />
    </>
  );
}

export default App;
// Props In React is a way to pass data from parent component to child component
// The value that you passes through card will be available in Card component