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

module.exports = router;