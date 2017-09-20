
  $("#makeRes").on("click", function(event) {
    event.preventDefault();

    function validateForm() {

     var isValid = true;
     $('.form-control').each(function() {
       if ($(this).val() === '')
         isValid = false;
     });

     return isValid;
   }
   if (validateForm() == true) {

    var newRes = {
      customerName: $("#resName").val().trim(),
      customerNumber: $("#resPhone").val().trim(),
      customerEmail: $("#resEmail").val().trim(),
      customerID: $("#resId").val().trim()
    };

    $.post("/api/new", newRes)
      .done(function(data) {
        console.log(data);
        $("#resName").val('');
        $("#resPhone").val('');
        $("#resEmail").val('');
        $("#resId").val('');
        alert("Adding Reservation");
      });

    } else {
      alert("Please fill in all required fields");
    }
    return false;
  });
