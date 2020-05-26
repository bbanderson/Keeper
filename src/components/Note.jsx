import React from "react";

import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {

  function sendId() {
    props.deleteNote(props.id)
  }

  return (
    <div id={props.id} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={()=>sendId()}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
