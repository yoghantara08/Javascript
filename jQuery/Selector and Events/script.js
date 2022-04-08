// Selectors
$(function () {
  $("#btn-nama").on("click", function () {
    $(".nama").html("Gustut Yoghantara");
  });
  $(".p1").text("Ganti Text");
  $("#btn-hide").on("click", function () {
    $(this).hide();
  });
});

// Events
$(function () {
  $("#kotak p").on("click", function () {
    $(this).text("Selamat anda berhasil merubah kalimat");
  });
  $("#kotak").on("mousemove", onMouseMove);
  $("#kotak").on("mouseleave", onMouseLeave);
  $("#kotak").on("mouseup", onMouseUp);
  $("#kotak").on("mousedown", onMouseDown);
});

function onMouseMove(e) {
  $("#mouse-move").text(`${e.type}: X = ${e.pageX}, Y = ${e.pageY}`);
}

function onMouseLeave() {
  $("#mouse-move").text("mouseleave");
}

function onMouseUp() {
  $("#mouse-up-down").text("mouse up");
}
function onMouseDown() {
  $("#mouse-up-down").text("mouse down");
}
