$(document).ready(function () {
  $(".up").hide();
$("#up").click(function () {
  $(".down").slideUp(1000);
  $(".up").show();
});
$("#down").click(function () {
  $(".up").slideUp(1000);
  $(".down").slideDown(1000);
});
$("#toggle").click(function () {
  $(".down").slideToggle();
  $(".up").slideToggle();
});
});