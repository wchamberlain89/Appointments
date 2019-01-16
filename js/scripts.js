$(function(){
  $("#appointment button").click(function(){
    var name = $("#name").val();
    var start = $("#start").val();
    var date = $("#date").val();

    $("#user").text(name);
    $("#appt-time").text(start);
    $("#appt-date").text(date);
  })
});
