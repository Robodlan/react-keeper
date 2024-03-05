import React from "react";

export default function ToDoItem(props) {
  return (
    <div onClick={handleClick}>
      <li>{props.item}</li>
    </div>
  );
}
