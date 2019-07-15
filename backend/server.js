const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;


app.use(cors());

// set up MongoDB Atlas
require('./models/database')

var router = require('./routes/routes');

// assign routes
app.use('/', router);

app.listen(port, function(){
    console.log("Listening on port " + port);
});