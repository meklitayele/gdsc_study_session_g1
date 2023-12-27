import React, { useState } from "react";
import Form from "./components/Form";
import 'App.css'
const App = () => {
  const [notes, setNotes] = useState([]);

  const handleNewNoteSubmit = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div>
      <h1>Note Taking App</h1>
      <Form handleNewNoteSubmit={handleNewNoteSubmit} />
      <hr />
      <h2>Notes:</h2>
      {notes.length === 0 ? (
        <p>No notes available.</p>
      ) : (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>
              <h3>Main Topic: {note.mainTopic}</h3>
              <h4>Sub Topic: {note.subTopic}</h4>
              <p>Content: {note.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;