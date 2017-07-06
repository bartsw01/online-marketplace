$(document).ready(function(){
  $("#formOrder").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var addressInput = $("input#address").val();
    var tshirtInput = $("#tshirt").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".address").text(addressInput);
    $(".tshirt").text(tshirtInput);
    $("#receipt").show();
    event.preventDefault();
  });
});
