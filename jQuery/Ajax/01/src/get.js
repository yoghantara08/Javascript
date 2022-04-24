$(document).ready(function () {
  $.get("ajax.html", function (data) {
    $("#result").html(data);
  });
});
