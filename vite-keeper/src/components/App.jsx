import React, { useState } from "react";

function App() {
  const [name, setName] = useState({
    fName: firstName,
    lName: lastName
  });
  const [last, setLast] = useState("");

  function handleChange(e) {
   setName(e.target.value)
  }

  function handleLast(e) {
   setLast(e.target.value)
  };

  return (
    <div className="container">
      <h1>Hello {name}{last}</h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name"value={name}/>
        <input onChange={handleLast} name="lName" placeholder="Last Name" value={last}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
