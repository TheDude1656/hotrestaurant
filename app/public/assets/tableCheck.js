$(function() {
  var currentURL = window.location.origin;
  var tableNum = 0;
  var tableCount = 0;
  var waitNum = 0;
  var waitCount = 0;
  if (tableCount < 5) {
    $.get(currentURL + "/allTables",
      function(reservations) {
        for (let res in reservations) {
          tableNum++;
          tableCount++;
          if(res < 5){
            console.log(reservations[res].customerID);
            var newTable = $("<div class='panel panel-default'>");
            var waitNumber = $("<p>").html("<span class='label label-primary'>" + tableNum);
            var resInfo = $("<p>").html(reservations[res].customerID);
            newTable.prepend(waitNumber, resInfo);
            $("#tableRes").append(newTable);
          }
        }
      });
  } else {
    console.log("Tables full, add to waitlist");
    waitJson.push(reservations);
    alert("Adding to waitlist");
  }
    $.get(currentURL + "/allWait",
      function(reservations) {
        for (let res in reservations) {
          waitNum++;
          waitCount++;
          console.log(reservations[res].customerID);
          var newTable = $("<div class='panel panel-default'>");
          var waitNumber = $("<p>").html("<span class='label label-primary'>" + waitNum);
          var resInfo = $("<p>").html(reservations[res].customerID);
          newTable.prepend(waitNumber, resInfo);
          $("#waitDiv").append(newTable);
        }
      });
});
