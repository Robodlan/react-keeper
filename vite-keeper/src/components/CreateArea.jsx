import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function expand() {
    setIsExpanded(true)
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submitNote(e) {
    props.onChange(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded === true ? <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        /> : null}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded === true ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isExpanded} >
          <Fab onClick={submitNote}><AddCircleOutlineIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
{/* <Button  onClick={submitNote} variant="outlined">Add</Button> */ }
