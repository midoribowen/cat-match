$(document).ready(function() {
  $("form#match").submit(function(event) {
    var age = parseInt($("input#age").val());
    var pets = $("input#pets").val();
    var kids = $("input#kids").val();

    if (age >= 75 && pets === "None" && kids === "No") {
      $("#elderly").show();
    } else if (age <= 74 && pets === "Cat" && pets === "Dog" && kids === "No") {
      $("#petPal").show();
    } else if (age <= 74 && pets === "No" && kids === "Yes") {
      $("#kidFriendly").show();
    } else if (age <= 74 && kids === "No" && pets === "None") {
      $("#solo").show();
    }

    event.preventDefault();

  });

});
