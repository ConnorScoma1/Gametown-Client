  
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
var path = require("path");

app.use(express.static("public"));

/*=======================================
    Setting Up Routes
=========================================*/

// Main Landing Page Route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  });

//   about page routing

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname + "/public/about.html"));
  });

//   contact page routing
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname + "/public/contact.html"));
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));