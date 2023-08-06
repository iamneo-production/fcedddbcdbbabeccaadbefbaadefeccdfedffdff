import React from 'react';

const Note = ({ title, description, onDelete }) => {
  return (
    <div className="note">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Note;
