var waitJson = require("../data/waitlist.js");
var tableJson = require("../data/tables.js");

module.exports = function(app) {

  app.get('/api/reserve', function(req, res) {
    res.json(newRes);
  });

  app.get("/allTables", function(req, res) {
    res.json(tableJson);
  });

  app.get("/allWait", function(req, res) {
    res.json(waitJson);
  });

  app.post("/api/waitlist", function(req, res) {
    res.json();
  });

  app.post("/api/new", function(req, res) {
    var addRes = req.body;
    addRes.routeName = addRes.customerName.replace(/\s+/g, "").toLowerCase();

    console.log(addRes);

    tableJson.push(addRes);

    res.json(addRes);
  });


}
