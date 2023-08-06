import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateArea from './CreateArea';
import Note from './Note';

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (note) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const handleDeleteNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((note, i) => i !== index));
  };

  return (
    <div className="app">
      <Header />
      <CreateArea onAdd={handleAddNote} />
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            description={note.description}
            onDelete={() => handleDeleteNote(index)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
