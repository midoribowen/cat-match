$(document).ready(function() {
  $("form#match").submit(function(event) {
    var age = parseInt($("input#age").val());
    var pets = $("select#pets").val();
    var kids = $("input#kids").val();

    if (age > 75 || age === 75) {
      $('#elderly').show();
    } else if (pets === 'cat' && age < 75) {
      $('#petPal').show();
    } else if (pets === 'dog' && age < 75) {
      $('#petPal').show();
    }  else if (pets === 'none' && kids === 'yes' && age < 75) {
      $('#kidFriendly').show();
    } else {
      $('#solo').show();
    }

    event.preventDefault();

  });

});
