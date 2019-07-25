$( document ).ready(function() {

  // stadio iniziale pagina
  var img = $(".n1").children(".contact").children(".foto").html();
  console.log(img);
  $(".dx .image_account .image_C").append(img);

  var name = $(".n1").children(".contact").children(".nome").children("p").html();
  console.log(name);
  $(".dx .image_account .text_dx > span").append(name);

// logica per inserimento messaggio da parte dell'utente
// logica per sostituzione icona microfono e invia
$(".second_item input").click( function() {
$(".last_item .first").removeClass("active");
$(".last_item .last").addClass("active");
});


// logica per visualizzazione della chat al click
$(".list_chat > div").click(function() {
 $(".list_chat > div").css("border", "none");
  $(this).css("border", "5px solid gray");
  $(".messaggistica > div").removeClass("view_chat");
  var classe = $(this).attr("class");
  $(".dx .image_account .image_C .logo").remove();
  $(".dx .image_account .text_dx span").text(" ");
  $(".messaggistica > div").each(function() {
    var attrChat = $(this).attr("class");
    // console.log("questo lalala" + attrChat);
    // controllo per corrispondenza classe del click con chat da visualizzare
    if (attrChat == classe) {
      $(this).addClass("view_chat");
    };
  });

  // definizione per sostituire immagine a seconda della chat visualizzata
  var img = $(this).children(".contact").children(".foto").html();
  console.log(img);
  $(".dx .image_account .image_C").append(img);

  var name = $(this).children(".contact").children(".nome").children("p").html();
  console.log(name);
  $(".dx .image_account .text_dx > span").append(name);

});
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

    // funzione per ricerca contatti in base alle lettere digitate
    $(".input_section input").keyup(function() {
      var tasto = $(this).val().toLowerCase();
      console.log("questa è la lettera " + tasto);
      // ricerca corrispondenza fra le lettere digitate e quelle presenti nei nomi contatti
      $(".list_chat div .contact").each(function() {
        $(this).show();
        var contattoTrovato = $(this).find(".nome p").text().toLowerCase();
          console.log("questa è il contatto " + contattoTrovato);
        if (!contattoTrovato.includes(tasto)) {
          $(this).hide();
        }
      });
    });

});
