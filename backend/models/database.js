const mongoose = require("mongoose");
const dbURI = 'mongodb+srv://test:1234@cluster0-lze1n.mongodb.net/test?retryWrites=true&w=majority';

var options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  dbName: "focus-timer"
};

mongoose.connect(dbURI, options);

let db = mongoose.connection;

db.once('open', function() {
  console.log("connected to mongoDB atlas")
});

db.on('error', function(err) {
  console.log(err);
})

require('./user.js');
