const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());

// set up MongoDB Atlas
require('./models/db');

// assign routes
var router = require('./routes/routes');
app.use('/', router);

// listen
const port = process.env.PORT || 3001;
app.listen(port, function(){
    console.log("Listening on port " + port);
});