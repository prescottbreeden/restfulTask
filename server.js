const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));

//Connect to mongo db
mongoose.connect('mongodb://localhost/restfulTask1', {useNewUrlParser: true});
//Import routes
require('./backend/routes.js')(app);

app.listen(8000, () => {
  console.log("listening on port 8000");
})