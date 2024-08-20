const Joi = require('joi');
const express = require('express');
const http = require('http');
const genres = require('./routes/genres');

const app = express();

app.use(express.json());

app.use('/api/genres', genres);

const port = process.env.PORT || 3000;


const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

