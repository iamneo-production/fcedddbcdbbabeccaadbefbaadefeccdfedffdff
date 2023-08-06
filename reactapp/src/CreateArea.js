import React, { useState } from 'react';

const CreateArea = ({ onAdd }) => {
  const [note, setNote] = useState({ title: '', description: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleAdd = () => {
    if (note.title && note.description) {
      onAdd(note);
      setNote({ title: '', description: '' });
    }
  };

  return (
    <div className="create-area">
      <input
        type="text"
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
        id="title"
      />
      <textarea
        name="description"
        value={note.description}
        onChange={handleChange}
        placeholder="Take a note..."
        id="desc"
      />
      <button onClick={handleAdd} id="addNotes">
        Add
      </button>
    </div>
  );
};

export default CreateArea;
