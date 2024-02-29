import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [state, setState] = useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setItem(newValue);
  }

  function handleClick() {
    setState((prev) => [...prev, item]);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {state.map((todoItem) => (
          <li>{todoItem}</li>
        ))}
      </div>
    </div>
  );
}

export default App;

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s
