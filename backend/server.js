const express = require('express');
const colors = require('colors');
const asyncHandler = require('express-async-handler');
const connectDB = require('./config/db');
const Note = require('./models/noteModel');

const app = express();
app.use(express.json());
connectDB();

app.get('/', (req, res) => {
  res.send('Api is running ....');
});

app.get(
  '/notes',
  asyncHandler(async (req, res) => {
    const notes = await Note.find({});
    res.json(notes);
  })
);

app.post(
  '/notes',
  asyncHandler(async (req, res) => {
    const body = req.body;
    console.log(body);
    const note = await Note.create({
      title: body.title,
      content: body.content,
    });
    res.json(note);
    // code to store note in DB
  })
);

app.get(
  '/notes/:id',
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const note = await Note.findById(id);
    res.json(note);
  })
);

app.listen(5000, console.log('Server is running on port 5000'));
