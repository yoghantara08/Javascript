$.ajax({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts",
  dataType: "json",
}).done(function (data) {
  console.log(data);
  $.map(data, function (post, i) {
    $("#result").append(`<h3>${post.title}</h3><p>${post.body}</p>`);
    console.log(i);
  });
});
