$(document).ready(function() {
  $("form#match").submit(function(event) {
    var age = parseInt($("input#age").val());
    var pets = $("input#pets").val();
    var kids = $("input#kids").val();

    if (age >= 75) {
      $("#elderly").show();
    } else if (pets === "Cat") {
      $("#petPal").show();
    } else if (pets === "Dog") {
      $("#petPal").show();
    }  else if (pets === "None" && kids === "Yes") {
      $("#kidFriendly").show();
    } else {
      $("#solo").show();
    }

    event.preventDefault();

  });

});
