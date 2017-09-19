var express = require("express");
var app = express();
var path = require("path");
var port = process.env.PORT || 3000;



// hit counter
var hitCounter = 0;

app.get("/", function (req, res) {
    console.log("hit!")
    hitCounter++;
    console.log(hitCounter);
    res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(port);
console.log("Server has started!  The address is http://localhost.com:" + port);