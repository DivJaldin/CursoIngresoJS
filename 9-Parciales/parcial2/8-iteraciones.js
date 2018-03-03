//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*8-Realizar el algoritmo que al presionar el botón "Mostrar" permita ingresar números positivos (validar que sea positivo) hasta que el usuario quiera. 
Informar al terminar el ingreso por document.write: 
a) la cantidad de números pares. 
b) el promedio de todos los números ingresados. 
c) la suma de todos los números. 
d) El número máximo y el mínimo. ;
*/
	var numero;
	var seguir=true;
	var cantPares=0
	var acumulador;
	var promedio;
	var contador=0;
	var flag = false;
	var maximo;
	var minimo;

	while (seguir==true)
	{
		numero = prompt ("ingrese numero");
		numero =parseInt (numero);

		while ( numero<=0 )
		{
			numero = prompt ("ingrese numero");
			numero =parsInt (numero);
		}
		seguir = confirm ("desea ingresar otro?");
	
		if (numero%2==0)
		{
			cantPares ++ ;
		}
		acumulador = acumulador + numero;

		if (flag == false|| numero < minimo)
		{
			minimo = numero;
		}
		if (flag == false || numero > maximo)
		{
			maximo = numero;
			flag = true;
		}

		contador++;
		seguir =confim ("desea ingresar otro?");

	}

	promedio = acumulador / contador;
	document.write ("primedio: " + promedio + "<br>");
	document.write ("sumatoria:" + acumulador + "<br");
	document.wirte ("maximo: " + maximo + "minimo: " + minimo + "<br");

}

