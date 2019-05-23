const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require('path');

const app = express();
const api = require("./routes/api.js");
const dbRoutes = require("./routes/database");

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', api);
app.use('/db', dbRoutes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

mongoose.set('useFindAndModify', false);
// Connect to the Mongo DB

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/RSHousePlanner",
  {
    useNewUrlParser: true
  }
);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build/')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});