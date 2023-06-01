const express = require('express');
const path = require('path');

const PORT = 3000

// Router
const apiRouter = require('./routes/apiRouter.js');
const authRouter = require('./routes/authRouter.js')
const scraperRouter = require('./routes/scraperRouter.js')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serve public files, images, css etc
app.use(express.static(path.resolve(__dirname, '../public')));

// Route Handlers
app.use('/api', apiRouter);

app.use('/auth', authRouter);

app.use('/scraper', scraperRouter);

// Catch all
app.use('*', (req, res) => {
  console.log("We've entered the catch all");
  res.status(404).send('Not Found');
});

// Global error handler
app.use((err, _req, res, _next) => {
  const defaultErr = {
    log: 'Express global error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// starts server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;

// Unused stuff?
// const cors = require('cors');
// app.use(cors());
// app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// const jwt = require('jsonwebtoken');
// token for jwt later
// const secret = 'changjunpatrickdocortland';
