const mongoose = require('mongoose');

const mongoDBUrl = process.env.MONGODB_URI || 'mongodb://localhost/vidly';

module.exports = function() {

    mongoose.connect(mongoDBUrl)
    .then(() => console.log(`Connected to ${mongoDBUrl}...`))
    .catch(err => console.error(`Could not connect to ${mongoDBUrl}...`, err));

};
