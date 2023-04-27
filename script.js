// Sticky Header
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".main-header").addClass("sticky");
  } else {
    $(".main-header").removeClass("sticky");
  }
});

/* Mobile Navigation
$(".mobile-toggle").on("click", function () {
  console.log("Clicked!");
  if ($(".main-header").hasClass("open-nav")) {
    $(".main-header").removeClass("open-nav");
  } else {
    $(".main-header").addClass("open-nav");
  }
});
*/
$(document).ready(function () {
  $(".mobile-toggle").click(function () {
    $(this).toggleClass("active");
    $(".main-header").toggleClass("open-nav");
  });

  // navigation scroll lijepo radi materem
  $("nav a").on("click", function (event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $("html, body").animate(
      {
        scrollTop: target,
      },
      500
    );
    evt.preventDefault();
  });
});
