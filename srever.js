  
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

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));