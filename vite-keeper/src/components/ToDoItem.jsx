import React, { useState } from "react";

function ToDoItem(props) {
  const [state, setState] = useState(false);

  function handleClick() {
    setState(true);
  }
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: state ? "underline" : "none" }}>
        {props.item}
      </li>
    </div>
  );
}

export default ToDoItem;
