$(document).ready(function () {
  $("#area").hide();
  $("#balas").click(function (event) {
    $("#area").toggle();
    event.preventDefault();
  });

});