const express = require('express');
const session = require('express-session');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require('cors'); // addition we make
const fileUpload = require('express-fileupload'); //addition we make
const user = require('./routes/api/user');

const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
app.use(bodyParser.json());

// use cors to allow cross-origin requests 
app.use(cors());
// use fileuplaod for uploading files. 
app.use(fileUpload());

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

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport config
require("./config/passport")(passport);

// assign user routes
app.use('/api/user', user);

// listen
const port = process.env.PORT || 3001;
app.listen(port, function(){
    console.log("Listening on port " + port);
});