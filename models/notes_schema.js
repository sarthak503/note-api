const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100, 
  },
  content: {
    type: String,
    required: true,
    maxlength: 1000, 
  },
  createdAt: {
    type: String, 
    default: () => {
      const date = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      return date;
    },
  },
  updatedAt: {
    type: String, 
    default: () => {
      const date = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      return date;
    },
  },
});

module.exports = mongoose.model('Note', noteSchema);
