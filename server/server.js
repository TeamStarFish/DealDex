const express = require('express');
const path = require('path');
const app = express();
// const cors = require('cors');

// app.use(cors());

// Router
//const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Leads us to the route handlers
//app.use('/', apiRouter);

// Global error handler
app.use((err, _req, res, _next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
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
