//Realizar el algoritmo que al presionar el botón "Mostrar" pida el importe de las ventas 
//(validar que sea mayor a 0,”cero”) de los 7 días de la semana por prompt (una por día),
 //e informar cual fue el mayor importe y cuál fue el menor importe de venta
function Mostrar()
{
	var contador=0 ;
	var detector = false;
	var bandera;
	var max;
	var min;

	alert ("Por favor, ingrese importe de ventas correspondiente a los siguientes días.");
	do
	{
		var lunes = parseInt (prompt("Lunes"));
		var martes = parseInt (prompt("Martes"));
		var miercoles = parseInt (prompt("Miercoles"));
		var jueves = parseInt (prompt ("Jueves"));
		var viernes  = parseInt (prompt ("viernes "));
		var sabado = parseInt (prompt ("Sabado"));
		var domingo = parseInt (prompt ("Domingo"));
		detector = lunes<0 || martes<0 || miercoles<0 || jueves<0 || viernes <0 || sabado<0 || domingo<0 || isNaN(lunes, martes, miercoles, jueves, viernes , sabado, domingo) ;
		if(detector == true)
		{
			alert ("reingrese los datos por favor.");
			detector = false;
		}
	}
	while ( lunes<0 || martes<0 || miercoles<0 || jueves<0 || viernes <0 || sabado<0 || domingo<0 || isNaN(lunes, martes, miercoles, jueves, viernes , sabado, domingo))
	max = lunes;
	if (martes > max)
	{
		max = martes;
	}
	if (miercoles >max)
	{
		max = miercoles;
	}
	if (jueves > max)
	{
		max = jueves;
	}
	if (viernes > max)
	{
		max = viernes;
	}
	if (sabado > max)
	{
		max = sabado;
	}
	if (domingo > max)
	{
		max = domingo





	}
	//	bandera = false;
	//	maximo =num;
	//	minimo=num;
	//}	
	//else
	//{
	//	 (numero > maximo)

	//}

}

