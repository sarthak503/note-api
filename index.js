const express = require('express');
const connectDB = require('./config/db');
const notesRouter = require('./routes/notes');

const app = express();
connectDB()
  .then(() => {
    app.use(express.json());
    app.use('/api/notes', notesRouter);
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something went wrong!');
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to database:', err);
    process.exit(1); 
  });
