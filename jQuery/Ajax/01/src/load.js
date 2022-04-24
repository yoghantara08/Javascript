$(document).ready(function () {
  // Load
  $("#result").load("ajax.html", function (responseTxt, statusTxt, xhr) {
    if (statusTxt === "success") {
      alert("Success");
      console.log(responseTxt);
    } else if (statusTxt === "error") {
      alert(`Error: ${xhr.statusTxt}`);
    }
  });
});
