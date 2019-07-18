const mongoose = require('mongoose');
const db = require("../config/keys").mongoURI;

var options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  dbName: "focus-timer"
};

mongoose.connect(db, options)
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

require('./user');