import React from 'react';

function Note({ id, title, content, onDelete }) {
  return (
    <div id={`${title.replace(/\s/g, '_')}`}>
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default Note;
