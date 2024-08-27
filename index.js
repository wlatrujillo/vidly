const express = require('express');
const http = require('http');

const app = express();

require('./startup/db')();
require('./startup/routes')(app);

const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

