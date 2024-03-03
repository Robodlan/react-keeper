import React from "react";

function ToDoItem(props) {
  return (
        <div onClick={()=> {
         props.onCheck(props.id)
         console.log(props.id)
        }} >
            <li>{props.item}</li>
        </div>
    )
}

export default ToDoItem;

