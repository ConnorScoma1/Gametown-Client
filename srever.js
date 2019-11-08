const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');

app.use(express.static('public'))

/*=======================================
    Setting Up Routes
=========================================*/

// Main Landing Page Route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
    console.log(`sending file from public folder on port ${port}`)
});

app.listen(port, () => console.log(`App Listening on Port ${port}`))