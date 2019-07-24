$( document ).ready(function() {

// logica per inserimento messaggio da parte dell'utente
// logica per sostituzione icona microfono e invia
$(".second_item input").click( function() {
$(".last_item .first").removeClass("active");
$(".last_item .last").addClass("active");
});

$(".list_chat > div").click(function() {
  $(".messaggistica > div").removeClass("view_chat");
  var classe = $(this).attr("class");

  $(".messaggistica > div").each(function() {
    var attrChat = $(this).attr("class");
    // console.log("questo lalala" + attrChat);
    if (attrChat == classe) {
      $(this).addClass("view_chat");
    };
  });
  console.log("classe " + classe);

//   var image 
//   $("image_account").val("foto");
// });
  // seleziono la foto del contatto
  // var fotoc = $(this).val("");
  // console.log(fotoc);
  //
  // $(".nav_up dx .image_account").val(fotoc);

  // $("image_account").val()
  // var clone_inviato = $("#template .mex_ricevuto").clone();
  // clone_inviato.text("Ciao, come va?");
  // $(".messaggistica .view_chat").append(clone_inviato);

  // logica per stampare testo inserito come messaggio su schermo
    $(".last_item .last").click(function() {
      var inserimentoUtente = $(".second_item input").val();
      var clone_span = $("#template .mex_inviato").clone();
      clone_span.text(inserimentoUtente);
      console.log(clone_span);
      $(".messaggistica .view_chat").append(clone_span);

      $(".second_item input").val("");
      $(".last_item .last").removeClass("active");
      $(".last_item .first").addClass("active");

      // variabile per salvare ultimo accesso
      var orarioContact = $(".text_dx .orario_accesso");
      // funzione per rispondere automaticamente al messaggio inviato
      setTimeout(function(){
        orarioContact.text("Sta scrivendo...");
        var clone_inviato = $("#template .mex_ricevuto").clone();
        clone_inviato.text("Ok");
        $(".messaggistica .view_chat").append(clone_inviato);
        // funzione per mettere ultimo accesso con data corrente
        setTimeout(function(){
          var date = new Date();
          var hH = date.getHours();
          var mM = date.getMinutes();
          if (mM < 10) {
            mM = "0" + mM;
          }
          orarioContact.text("Ultimo accesso alle ore " + hH + ":" + mM);
        }, 500);
      }, 1000);
    });

    // $(".chat_sx .input_section input").keyup(function() {
    //   var tasto = $(this).val().toLowerChase();
    //
    //
    //   $(".contact .nome").each(function() {
    //     var nomeChat = $(this).text().toLowerChase();
    //     $(".contact .nome").show();
    //
    //     if(!nomeChat.includes(tasto)) {
    //       $(".contact .nome").hide();
    //     }
    //   });
    // });

});
