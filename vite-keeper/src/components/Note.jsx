import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';

function Note(props) {
  function deleteItem() {
    props.delete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={deleteItem}><DeleteIcon/></Fab>
    </div>
  );
}

export default Note;
