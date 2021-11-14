$(document).ready(function () {
  $("#Parent-Text").click(function () {
    $("#target").html(
      `${$("#parent").html()} ${$("#target").html()}${$("#child").html()}${$(
        "#target"
      ).html()}`
    );
  });
  $("#Child-Text").click(function () {
    $("#target").html(`${$("#child").html()} ${$("#target").html()}`);
  });
});