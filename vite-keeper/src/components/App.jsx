import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { nanoid } from "nanoid";

function App() {
  const [note, setNote] = useState([]);

  function addNote(newNote) {
    setNote((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteItem(id){
   setNote(prev => {
    return prev.filter((item, index)=> {
      return index !== id;
    })
   })
  }
  return (
    <div>
      <Header />
      <CreateArea onChange={addNote} />
      {note.map((note, index) => {
        return (
          <Note
            delete={deleteItem}
            key={nanoid()}
            id={index}
            title={note.title}
            content={note.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

// npm install @mui/material @emotion/react @emotion/styled (MATERIAL UI INSTALATION)


//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
