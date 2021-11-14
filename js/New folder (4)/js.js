$(document).ready(function () {
  $(".out").hide();
  $("#out").click(function () {
    $(".in").hide();
    $(".out").show();
  });
  $("#in").click(function () {
    $(".in").show();
    $(".out").hide();
  });
});