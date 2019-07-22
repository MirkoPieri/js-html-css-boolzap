$( document ).ready(function() {

// logica per inserimento messaggio da parte dell'utente
// logica per sostituzione icona microfono e invia
$(".second_item input").click( function() {
  $(".last_item .first").removeClass("active");
  $(".last_item .last").addClass("active");
});

// logica per stampare testo inserito come messaggio su schermo
  $(".last_item a").click(function() {
    var inserimentoUtente = $(".second_item input").val();
    var clone_span = $("#template .mex_inviato").clone();
    var clone_orario = $("#template p")
    clone_span.text(inserimentoUtente);
    console.log(clone_span);
    $(".messaggistica").append(clone_span);

    $(".second_item input").val("");
    $(".last_item .last").removeClass("active");
    $(".last_item .first").addClass("active");
  });







});
