const express = require('express');
const http = require('http');
const genres = require('./routes/genres');
const customers = require('./routes/customers');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/vidly')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

const app = express();

app.use(express.json());

app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 3000;


const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

