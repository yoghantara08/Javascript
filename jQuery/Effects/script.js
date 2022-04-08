$(function () {
  // toggle or hide and show
  $(".flip1").on("click", function () {
    $(".panel1").toggle(1000 /*, callback*/); // millisecond, 'slow' , 'fast'
  });

  // Fade
  $(".flip2").on("click", function () {
    $(".panel2").fadeToggle("slow");
  });

  // Slide
  $(".flip3").on("click", function () {
    $(".panel3").slideToggle("slow");
  });

  // Animate
  $("#animate").on("click", function () {
    const kotak = $(".kotak");
    kotak.animate({ left: "+=100px" }, "slow");
    kotak.animate({ width: "+=100px" }, "slow");
    kotak.animate({ height: "+=100px" }, "slow");
    kotak.animate({ height: "-=100px" }, "slow");
    kotak.animate({ width: "-=100px" }, "slow");
    kotak.animate({ left: "-=100px" }, "slow");
  });

  // Stop
  $(".flip4").click(function () {
    $(".panel4").slideDown(3000);
  });
  $("#stop").click(function () {
    $(".panel4").stop();
  });

  // Chaining
  $("#chain").click(function () {
    $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
  });
});

// ===========================================================
// Show Hide
$("#test").click(function () {
  $("p").hide();
});

$("#test").click(function () {
  $("p").show();
});

// Fade in out
$("test").on("click", function () {
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});

$("test").click(function () {
  $("#div1").fadeOut();
  $("#div2").fadeOut("slow");
  $("#div3").fadeOut(3000);
});

// Slide
$("#test").click(function () {
  $("#panel").slideDown();
});
$("#test").click(function () {
  $("#panel").slideUp();
});

// Animate
$("test").click(function () {
  $("div").animate({
    left: "250px",
    opacity: "0.5",
    height: "150px",
    width: "150px",
  });
});
$("test").click(function () {
  $("div").animate({
    left: "250px",
    height: "+=150px",
    width: "+=150px",
  });
});
$("test").click(function () {
  $("div").animate({
    height: "toggle",
  });
});
