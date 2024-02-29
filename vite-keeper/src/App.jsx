import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [state, setState] = useState([]);

  function handleInput(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleClick() {
    setState((prev) => [...prev, inputText]);
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInput} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {state.map((newItem) => (
            <li>{newItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
