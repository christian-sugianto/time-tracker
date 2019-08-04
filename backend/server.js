const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");

const user = require('./routes/api/user');

const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport config
require("./config/passport")(passport);

// Passport middleware
app.use(passport.initialize());

// assign user routes
app.use('/api/user', user);

// listen
const port = process.env.PORT || 3001;
app.listen(port, function(){
    console.log("Listening on port " + port);
});