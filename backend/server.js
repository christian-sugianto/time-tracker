const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// enable all cors requests
app.use(cors());

// set up MongoDB Atlas
require('./models/database')

// assign routes
var router = require('./routes/routes');
app.use('/', router);

// listen
app.listen(port, function(){
    console.log("Listening on port " + port);
});