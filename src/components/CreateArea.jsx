import React, { useState } from "react";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  // const [items, setItems] = useState([]);
  const [isInit, setInit] = useState(true);

  function saveItem(event) {
    // setItems(note);
    props.newNote(note);
    event.preventDefault();
    setNote({title: "", content: ""});
  }

  function handleInput(event) {
    const {name, value} = event.target;

    setNote(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <div>
      <form className="create-note">
        <input onChange={handleInput} name="title" placeholder="Title" value={note.title} style={{display : isInit ? "none" : ""}} />
        <textarea onClick={()=>setInit(!isInit)} onChange={handleInput} name="content" placeholder="Take a note..." rows={isInit ? 1 : 3} value={note.content} />
        <Zoom in={!isInit}>
          <Fab onClick={saveItem}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
