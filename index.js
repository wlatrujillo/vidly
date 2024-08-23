const express = require('express');
const http = require('http');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');

const mongoose = require('mongoose');

const mongoDBUrl = process.env.MONGODB_URI || 'mongodb://localhost/vidly';
console.log(mongoDBUrl);
mongoose.connect(mongoDBUrl)
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'));

const app = express();

app.use(express.json());

app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
console.log('app.use(/api/users, users);');
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

