const express = require('express');
const router = express.Router();
const Note = require('../models/notes_schema');

router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', getNote, (req, res) => {
  res.json(res.note);
});


router.post('/', [
  body('title').isLength({ min: 1, max: 100 }).withMessage('Title is required and should be between 1 to 100 characters'),
  body('content').isLength({ min: 1, max: 1000 }).withMessage('Content is required and should be between 1 to 1000 characters'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, content } = req.body;

  try {
    const note = new Note({
      title,
      content,
    });

    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', getNote, async (req, res) => {
  if (req.body.title != null) {
    res.note.title = req.body.title;
  }
  if (req.body.content != null) {
    res.note.content = req.body.content;
  }
  res.note.updatedAt = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }); // Set updatedAt to current IST time


  try {
    const updatedNote = await res.note.save();
    res.json(updatedNote);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', getNote, async (req, res) => {
  try {
    await Note.deleteOne({ _id: req.params.id });
    res.json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getNote(req, res, next) {
  let note;
  try {
    note = await Note.findById(req.params.id);
    if (note == null) {
      return res.status(404).json({ message: 'Note not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.note = note;
  next();
}

module.exports = router;