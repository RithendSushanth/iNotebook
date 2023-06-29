const express = require('express');
const Note = require('../models/Note');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get all Notes using: GET "/api/notes/fetchall". Login required
router.get('/fetchall', fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post(
  '/addnote',
  fetchuser,
  [
    body('title', 'Title must be at least 3 characters long').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters long').isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const newNote = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await newNote.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  }
);

// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote/:id". Login required
router.put(
  '/updatenote/:id',
  fetchuser,
  [
    body('title', 'Title must be at least 3 characters long').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters long').isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      const newNote = { title, description, tag };
      const note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).json({ error: 'Note not found' });
      }
      if (note.user.toString() !== req.user.id) {
        return res.status(401).json({ error: 'Not authorized' });
      }
      const updatedNote = await Note.findByIdAndUpdate(req.params.id, newNote, { new: true });
      res.json(updatedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  }
);

// ROUTE 4: Delete a Note using: DELETE "/api/notes/deletenote/:id". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    // Allow deletion only if user owns this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: 'Not authorized' });
    }
    await note.remove();
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
