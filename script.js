$( document ).ready(function() {

// logica per inserimento messaggio da parte dell'utente
// logica per sostituzione icona microfono e invia
$(".second_item input").click( function() {
  $(".last_item .first").removeClass("active");
  $(".last_item .last").addClass("active");
});

var clone_inviato = $("#template .mex_ricevuto").clone();
clone_inviato.text("Ciao");
$(".messaggistica").append(clone_inviato);

// logica per stampare testo inserito come messaggio su schermo
  $(".last_item .last").click(function() {
    var inserimentoUtente = $(".second_item input").val();
    var clone_span = $("#template .mex_inviato").clone();
    var clone_orario = $("#template p")
    clone_span.text(inserimentoUtente);
    console.log(clone_span);
    $(".messaggistica").append(clone_span);

    $(".second_item input").val("");
    $(".last_item .last").removeClass("active");
    $(".last_item .first").addClass("active");

    // variabile per salvare ultimo accesso
    var orarioContact = $(".text_dx .orario_accesso");
    // funzione per rispondere automaticamente al messaggio inviato
    setTimeout(function(){
      orarioContact.text("Sta scrivendo...");
      var clone_inviato = $("#template .mex_ricevuto").clone();
      clone_inviato.text("ok");
      $(".messaggistica").append(clone_inviato);
      // funzione per mettere ultimo accesso con data corrente
      setTimeout(function(){
        var date = new Date();
        console.log(date);
        var hH = date.getHours();
        var mM = date.getMinutes();
        if (mM < 10) {
          mM = "0" + mM;
        }
        orarioContact.text("Ultimo accesso alle ore " + hH + ":" + mM);
      }, 500)
    }, 1000);
  });






});
