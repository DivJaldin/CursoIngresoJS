/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos;
var numeroIngresado;

function comenzar() 
{

    numeroSecreto=Math.floor((Math.random ()* 100 ) +1);
    intentos=0;

}

function verificar() 
{

    numeroIngresado = document.getElementById("numero").value;
    // cuento intentos
    intentos=intentos+1;

    if(numeroIngresado == numeroSecreto)
    {
      alert ("usted es un ganador. y en solo " + intentos + " intentos");
      document.getElementById("intentos").value = "Ganaste despues de " + intentos + " Intentos";
      intentos=0;
    }
    else
    
      if (numeroIngresado > numeroSecreto)
      {
        alert ("Te pasate del numero secreto. "+ intentos + " Intentos ");
        //alert ("Te pasate del numero secreto");
      }
      else if (numeroIngresado < numeroSecreto)
      {
        alert ("Todavia falta para el numero secreto. "+ intentos + " Intentos ");
        //alert ("Todavia falta para el numero secreto");
      }
}
