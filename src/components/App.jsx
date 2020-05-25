import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteItems, setNoteItems] = useState([]);

  function getNote(items) {
    setNoteItems(prev => {
      return [
        ...prev,
        items
      ]
    });
    return items
  }

  function deleteNote(id) {
    setNoteItems(prev=>{
      return noteItems.filter((item, index) => {
        return id !== index
      })
    })
    // console.log(id)
  }
  {console.log(noteItems)}


  return (
    <div>
      <Header />
      <CreateArea newNote={getNote} />
      {noteItems.map((item, index)=><Note key={index} id={index} title={noteItems[index].title} content={noteItems[index].content} deleteNote={deleteNote} />)}
      <Footer />
    </div>
  );
}

export default App;
