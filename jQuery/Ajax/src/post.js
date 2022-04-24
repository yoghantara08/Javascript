$("#postForm").submit(function (e) {
  e.preventDefault();

  const title = $("#title").val();
  const body = $("#body").val();
  const url = $(this).attr("action");

  $.post(url, { title, body }).done(function (data) {
    console.log(data);
  });
});
