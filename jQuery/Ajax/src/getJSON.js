$.getJSON("../data/users.json", function (data) {
  $.each(data, function (i, user) {
    $("#users").append(`<li>${user.firstName}</li>`);
  });
});
