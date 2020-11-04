import $ from "jquery";

function clickDots() {
  const dots = $(".header__dots");
  const list = $(".header__list");
  if (dots.hasClass("active")) {
    dots.removeClass("active");
    list.slideUp();
  } else {
    dots.addClass("active");
    list.slideDown();
  }
  return;
}
$(".header__dots").click(() => clickDots());
