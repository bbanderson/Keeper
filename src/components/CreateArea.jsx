import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  // const [items, setItems] = useState([]);

  function addItem(event) {
    // setItems(note);
    props.newNote(note);
    event.preventDefault();
    setNote({title: "", content: ""});
  }

  function handleInput(event) {
    const {name, value} = event.target;

    setNote(prev => {
      if (name === "title") {
        return {
          title: value,
          content: prev.content
        }
      } else if (name === "content") {
        return {
          title: prev.title,
          content: value
        }
      }
    })
  }

  return (
    <div>
      <form>
        <input onChange={handleInput} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleInput} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={addItem}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
