const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const apiRouter = require('./apiRouter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup api routes
app.use('/api', apiRouter);

// setup static routes
app.use(express.static(path.resolve(__dirname, 'client/build')));
app.get('/*', (req, res) => res.sendFile(path.resolve(__dirname, 'client/build/index.html')));

module.exports = app;
