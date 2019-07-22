$( document ).ready(function() {

// logica per inserimento messaggio da parte dell'utente
$(".second_item input").click( function() {
  $(".last_item .first").removeClass("active");
  $(".last_item .last").addClass("active");
});

  $(".last_item a").click(function() {
    var inserimentoUtente = $(".second_item input").val();
    var clone_span = $("#template .mex_inviato").clone();
    clone_span.text(inserimentoUtente);
    console.log(clone_span);
    $(".messaggistica").append(clone_span);

    $(".second_item input").val("");
    $(".last_item .last").removeClass("active");
    $(".last_item .first").addClass("active");
  });

  // var valueUtente = $("input").value();
  // console.log(valueUtente);






});
