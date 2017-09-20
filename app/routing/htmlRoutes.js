var path = require("path");

module.exports = function (app) {

  var pageHits = 0;
  app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/tables.html"));
  });

  app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/reserve.html"));
  });

  app.get('/hits', function (req, res) {
    pageHits++;
    res.json({
      hits: pageHits
    });
  })
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
    console.log("New Page Hit!");
    console.log(pageHits);

  });
}