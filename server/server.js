const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const User = require('./models/User');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);

//token for jwt later
const secret = 'changjunpatrickdocortland';

const app = express();
// Router
const apiRouter = require('./routes/api');

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, '../public'))); //serve public files, images, css etc

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
    const userDoc = await User.create({
      username: username,
      password: bcrypt.hashSync(password, salt),
    });
    // console.log("here---------" , userDoc)
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.findOne({ username });
    const verified = bcrypt.compareSync(password, userDoc.password);
    // const verified = //for bcrypt later

    if (verified) {
      console.log('verified');
      //logges in with username, id, as `userInfo`***
      jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          //sending userInfo to login page
          id: userDoc._id,
          username,
          testSend: 'we in here',
        });
      });
    }

    //need to fill this part.. cookies and jwt..
  } catch (err) {
    res.status(400).json('wrong password or username');
  }
});

app.get('/profile',  (req, res) => {
  const { token } = req.cookies;
  // res.json('ok')
   jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post('/logout', async (req, res) => {
  res.cookie('token', '');
});

app.use('/', apiRouter);
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
