const mongoose = require("mongoose");
const dbURI = 'mongodb+srv://test:1234@cluster0-lze1n.mongodb.net/test?retryWrites=true&w=majority';

var options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  dbName: "focus-timer"
};

mongoose.connect(dbURI, options).then(
  () => { console.log("Connected to MongoDB Atlas.") },
  err => { console.log(err) }
);

require('./user.js');
