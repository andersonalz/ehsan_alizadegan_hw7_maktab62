$(document).ready(function () {
  $(".container").hover(
    function () {
      $(".container").css("background-color", "red");
    },
    function () {
      $(".container").css("background-color", "blue");
    }
  );
});