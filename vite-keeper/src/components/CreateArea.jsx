import React, { useState } from "react";
import Button from '@mui/material/Button';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

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
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <Button  onClick={submitNote} variant="outlined">Add</Button>
      </form>
    </div>
  );
}

export default CreateArea;
{/* <button onClick={submitNote}>Add</button> */}