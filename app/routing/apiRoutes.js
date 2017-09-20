var waitJson = require("../data/waitlist.js");
var tableJson = require("../data/tables.js");
var mysql = require("mysql");
module.exports = function (app) {
  var connection = mysql.createConnection(require('../data/settings.js'));

  app.get('/api/reserve', function (req, res) {
    res.json(newRes);
  });

  app.get("/allTables", function (req, res) {
    res.json(tableJson);
  });

  app.get("/allWait", function (req, res) {
    res.json(waitJson);
  });

  app.post("/api/waitlist", function (req, res) {
    res.json();
  });

  app.post("/api/new", function (req, res) {
    var addRes = req.body;
    addRes.routeName = addRes.customerName.replace(/\s+/g, "").toLowerCase();

    console.log(addRes);

    tableJson.push(addRes);

    connection.query("INSERT INTO customer SET ?", {
      customerName: addRes.customerName,
      customerEmail: addRes.customerEmail,
      customerID: addRes.customerID,
      phoneNumber: addRes.customerNumber
    }, function (err, res) {
      if (err) throw err;
      console.log("Customer added to db");
    });

    res.json(addRes);
  });


}