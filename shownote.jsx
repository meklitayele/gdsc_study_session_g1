import React from "react";

const ShowNote = ({ note }) => {
  return (
    <div>
      <h2>Main Topic: {note.mainTopic}</h2>
      <h3>Sub Topic: {note.subTopic}</h3>
      <p>Content: {note.content}</p>
    </div>
  );
};

export default ShowNote;