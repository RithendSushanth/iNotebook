import React, { useState, useEffect } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
  const host = "https://inotebook-pzrc.onrender.com";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchall`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        }
      });
      const data = await response.json();
      if (response.status === 200) {
        setNotes(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Add a Note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });

      const data = await response.json();
      if (response.status === 200) {
        setNotes([...notes, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Delete a Note
const deleteNote = async (id) => {
  try {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });

    if (response.ok) {
      setNotes(notes.filter((note) => note._id !== id));
    } else {
      console.log('Failed to delete note');
    }
  } catch (error) {
    console.log(error);
  }
};

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    try {
      // API call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })
      });
      const json = await response.json();
      console.log(json);

      const data = await response.json();
      if (response.status === 200) {
        const updatedNotes = notes.map((note) =>
          note._id === id ? data : note
        );
        setNotes(updatedNotes);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};
  
export default NoteState;
