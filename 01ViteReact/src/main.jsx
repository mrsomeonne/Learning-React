/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App Practice !</h1>
    </div>
  );
}

/* const ReactElement = {
  type: 'a',
  props: {
    href: 'https://youtube.com',
    target: '_blank'
  },
  children: 'Click Here To Open Youtube'
} */

const anotherElement = (
  <a href="https://youtube.com" target="_blank">
    Visit Google
  </a>
);

//Declaring Variable
const anotherUser = " Nobody";

const reactElement = React.createElement(
  "a", // first parameter expects tag eg. 'p', 'h1'
  {
    // expects properties
    href: "https://youtube.com",
    target: "_blank",
  },
  "Click Me To Open Youtube", // expects Text
  anotherUser,
  anotherElement,
  MyApp()
);

createRoot(document.getElementById("root")).render(
  // <MyApp />
  // MyApp() // can also be called like this
  // <ReactElement/> // Will no execute
  // ReactElement // will not work
  // anotherElement   // This works.
  reactElement

  // <App />
  
);
