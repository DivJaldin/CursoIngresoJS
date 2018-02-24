function Mostrar()
{

	var contador=0;
	//los vamosa usarcomovariables de control de limitacion de operaciones 
	//como tambien en control de operaciones de cantidades.
	// "c" variable receptor = c "variable" + 1 "aditivo incrementador fijo".
	var acumulador=0;
	//compuesta por 2 partesvariables
	//A= A + V ;
	//A =subre valor0 + 0 
	//A= sube val 0 + cargo 15
	//A15 =sube val0+0
	//A15 = sube val 15 
 	var numero;

	while (contador < 5)
	{
		numero = prompt ("ingrese el numero");
		//genero la ventana para ingresarls.
		
		numero = parseInt (numero);
		while (numero <1 || numero>10)
		//acotamos la posibilidad
		{
			numero = prompt ("Error. reingrese un numero");
			numero = parseInt (numero);
		}
		acumulador+=numero;
		//esto es laequivalencia de
		 // acumulador =acumulador + numero; sigue abajo
		
		contador = contador +1;
		//contador+= 1;
		//contador++;
		if (contador==3);
		
	}
res = acumulador/contador;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN