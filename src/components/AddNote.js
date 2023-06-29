import React, { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Succesfully","success")
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className='container my-3'>
      <h1>Add a Note</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" name="title"  value={note.title} aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange} />
        </div>
        
        <div className="form-group my-2">
          <label htmlFor="desc">Description</label>
          <input type="text" className="form-control" id="desc" name="description"  value={note.description} placeholder="Desc" onChange={onChange} />
        </div>

        <div className="form-group my-2">
          <label htmlFor="desc">Tag</label>
          <input type="text" className="form-control" id="desc" name="tag" value={note.tag}  placeholder="Tags" onChange={onChange} />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  );
};

export default AddNote;
