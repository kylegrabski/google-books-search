const express = require("express");
const mongoose = require('mongoose');

//will need to add api routes
const routes = require("./routes")
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

 
// Define API routes here
app.use(routes);

//COnnect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", CLIENT_ORIGIN);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.header("Access-Control-Allow-Credentials", true); 
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});



// Send every other request to the React app
// Define any API routes before this runs

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.use(function ( req, res) {
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
