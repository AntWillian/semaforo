
var parar = false;
var automatico = false;

$(document).ready(function() {

  var finalizar = 3;
  var temporizador = 500;
  var contManual = 0;
  var contAutomatico = 0;
  var corGreen = $("#corGreen");
  var corOrange = $("#corOrange");
  var corRed = $("#corRed");
  corRed.addClass("red");

  $("#botaoManual").click(
    function() {
      contManual+=1;
      console.log(contManual);
      Manual();
    }
  )

  $("#botaoAutomatico").click(
    function(){
        var cont = 0;
        automatico = true;
        temporizador = 500;
        Automatico();
        console.log(automatico);
    }

  );

function Automatico() {
  if (automatico == true ) {

    corRed.addClass("red");
    corOrange.removeClass("orange");
    corGreen.removeClass("green");
    cont = 0;

    while (cont <= finalizar) {

        setTimeout(function(){
          corRed.addClass("red");
          corOrange.removeClass("orange");
          corGreen.removeClass("green");
         }, temporizador);

         temporizador+500;

         setTimeout(function(){
           corRed.removeClass("red");
           corOrange.addClass("orange");
           corGreen.removeClass("green");
         }, temporizador);


         temporizador+=500;


          setTimeout(function(){
              corRed.removeClass("red");
              corOrange.removeClass("orange");
              corGreen.addClass("green");
           }, temporizador);

           temporizador+=500;

           setTimeout(function(){
             corRed.removeClass("red");
             corOrange.addClass("orange");
             corGreen.removeClass("green");
           }, temporizador);

             temporizador+=500;

            setTimeout(function(){
              corRed.addClass("red");
              corOrange.removeClass("orange");
              corGreen.removeClass("green");
            }, temporizador);

             temporizador+=500;
        cont +=1;
    }

  }
  automatico = false;
}

function Manual() {

    if (contManual == 1) {
      corRed.removeClass("red");
      corOrange.addClass("orange");
      corGreen.removeClass("green");
    }

    if (contManual == 2) {
      corRed.removeClass("red");
      corOrange.removeClass("orange");
      corGreen.addClass("green");
    }

    if (contManual == 3) {
      corRed.removeClass("red");
      corOrange.addClass("orange");
      corGreen.removeClass("green");
    }

    if (contManual == 4) {
      corRed.addClass("red");
      corOrange.removeClass("orange");
      corGreen.removeClass("green");
      contManual = 0;
    }


}





});
