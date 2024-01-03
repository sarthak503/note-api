const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./index'); 
const Note = require('./models/notes_schema');

describe('Note API', () => {
  beforeEach(async () => {
    await Note.deleteMany({});
  });

  it('should create a new note', async () => {
    const newNote = {
      title: 'Test Note',
      content: 'This is a test note',
    };

   const res = await request(app)
   .post('/api/notes')
      .send(newNote);

    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual(newNote.title);
    expect(res.body.content).toEqual(newNote.content);
  });

  it('should get all notes', async () => {
    // Create test notes
    await Note.create([
      { title: 'Note 1', content: 'Content 1' },
      { title: 'Note 2', content: 'Content 2' },
    ]);

    const res = await request(app)
      .get('/api/notes');

    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThanOrEqual(2); // Check if at least 2 notes are returned
  });

  it('should update a note', async () => {
    const note = await Note.create({ title: 'Note', content: 'Content' });

    const updatedNote = {
      title: 'Updated Note',
      content: 'Updated Content',
    };

    const res = await request(app)
      .put(`/api/notes/${note._id}`)
      .send(updatedNote);

    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual(updatedNote.title);
    expect(res.body.content).toEqual(updatedNote.content);
  });

  it('should delete a note', async () => {
    const note = await Note.create({ title: 'Note to be deleted', content: 'Content' });

    const res = await request(app)
      .delete(`/api/notes/${note._id}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Note deleted');
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});
