import React from "react";

function ToDoItem(props) {
    function handleClick() {

    }
    return (
        <div onClick={handleClick} >
            <li style={{textDecoration: "line-through"}}>{props.item}</li>
        </div>
    )
}

export default ToDoItem;

