//Realizar el algoritmo que al presionar el botón "Mostrar" pida dos números por prompt, 
//si son iguales que los multiplique, 
//si el primero es mayor al segundo que los reste
 //y si no que los sume,
 // mostrar el resultado por document.write.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var multiplica;
	var resta;
	var suma;

	numeroUno = parseInt (prompt("numeroUno"));
	numeroDos = parseInt (prompt("numeroDos"));

	if (numeroUno == numeroDos)
	{
		multiplica = numeroUno * numeroDos;
		document.write (multiplica);
	}
	else if (numeroUno > numeroDos)
	{
		resta = numeroUno - numeroDos;
		document.write (resta);
	}
	else
	{
		suma = numeroUno + numeroDos;
		document.white (suma);
	}
	
}

