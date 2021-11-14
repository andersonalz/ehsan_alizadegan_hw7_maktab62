$(document).ready(function () {
  $("#btn").click(function () {
    $("#child").css(
      "width",
      (100 * parseFloat($("#child").css("width"))) /
        parseFloat($("#child").parent().css("width")) +
        10 +"%"
    );
  });
});