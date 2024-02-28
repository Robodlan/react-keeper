import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());

  function show() {
    setTimer(timer);
  }

  return (
    <div className="container">
      <h1>{timer}</h1>
      <button onClick={show}></button>
    </div>
  );
}

export default App;

// /Challenge:
//1. Given that you can get the current time using:

//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
