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
var contador=0
var numero

function comenzar()
{ var contador=0
  document.getElementById ("numero").value = numero
  numeroSecreto = Math.floor ((Math.random ()* (101-1)+1));
	//Genero el número RANDOM entre 1 y 100
	 alert ("numeroSecreto")
		//alert(numeroSecreto );
	

}

function verificar()
{
  var numero = contador+1;
  
	  document.getElementById("numero").value;

    if (numero == numeroSecreto && contador==1)
    {
      alert("usted es un ganador!!! y en solo" + contador)
    }
    if (contador<10)  
    {}
    else if (numero >= numeroSecreto)
    {
      alert ("fata" + contador )
    }
    else if (numero <= numeroSecreto)
    {
      alert ("se pasó" + contador)
    }
}