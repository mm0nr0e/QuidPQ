const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const mongoURI = 'mongodb://localhost/quidPq';
mongoose.connect(mongoURI);

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  // render homepage
});                    

app.get('/login', (req, res) => {
  // render homepage
});

app.post('/login', (req, res) => {
  // render homepage
});

app.get('/signup', (req, res) => {
  // render homepage
});

app.post('/signup', (req, res) => {
  // render homepage
});



app.listen(3000);

module.exports = app;
