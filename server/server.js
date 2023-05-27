const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const User = require('./models/User');

// app.use(cors());

const app = express();
// Router
const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to monogoDB
mongoose.connect(
  `mongodb+srv://testingdb:testingdb@cluster0.gs1nz9c.mongodb.net/`
);

// Leads us to the route handlers
app.use('/', apiRouter);

//route to /register
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = new User.create({
      username,
      password, //need to add bcrypt
    });
    console.log('here---------', userDoc);
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.find({ username });
    // const verified = //for bcrypt later

    //need to fill this part.. cookies and jwt..
  } catch (err) {
    res.status(400).json('wrong password or username');
  }
});

// Global error handler
app.use((err, _req, res, _next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'A global error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// starts server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = app;
