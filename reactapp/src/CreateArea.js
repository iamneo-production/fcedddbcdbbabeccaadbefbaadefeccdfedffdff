import React, { useState } from 'react';

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleAdd = () => {
    if (note.title && note.content) {
      onAdd(note);
      setNote({
        title: '',
        content: '',
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        id="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <textarea
        name="content"
        id="desc"
        value={note.content}
        onChange={handleChange}
        placeholder="Take a note..."
      />
      <button id="addNotes" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default CreateArea;
