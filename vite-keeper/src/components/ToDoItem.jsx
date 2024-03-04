import React, { useState } from "react";

export default function ToDoItem(props) {
  const [state, setState] = useState(false);

  function handleClick() {
    setState(true);
  }

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: state ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
}