//Realizar el algoritmo que al presionar el botón "Mostrar" pida el importe de las ventas 
//(validar que sea mayor a 0,”cero”) de los 7 días de la semana por prompt (una por día),
 //e informar cual fue el mayor importe y cuál fue el menor importe de venta
function Mostrar()
{
	var importe;
	var i=0;
	var maximoImporte;
	var minimoImporte;
	var flag; 
	//bucle de dias 7//
	while (i<7) 
	{
		importe = prompt ("ingrese un importe");
		importe = parseFloat(importe);
/*no voy a utilizar if ya que solamente se ejecutara una sola vez en este buble
por lo tanto utilizo otro while. genero bucle condicionante dle importe a ingresa
no exite dia negativo asi que*/
		while (importe <=0)
		{
			importe = prompt ("ERROR!!! Reingrese un importe");
			importe = parseFloat(importe);
		}
	// MODO CON BANDERA
		//el flag hara que el siguiente if solamente se ejecute una determinada cantidad de veces
		if (flag == 0)
		{
			maximoImporte = importe;
			minimoImporte = importe;
			flag = 1
		}
		else 
		{
			if (importe < minimoImporte)
			{
				minimoImporte = importe;
			}
			if (importe > maximoImporte)
			{
				maximoImporte = importe;
			} 
		i++;
		}
		alert ("el maximo es: " + maximoImporte + " y el minimo importe es " + minimoImporte)
	}
}
// ESTABLESCO REFERENCIAS/CONDICIONANTES - MODO - SIN BANDERA //
///////////////////////////////////////////
/* MODO 1 
		if (i==0)
		{
			maximoImporte = importe;
			minimoImporte = importe;
		}
		else 
		{
			if (importe < minimoImporte)
			{
				minimoImporte = importe;
			}
			else 
			{

			}
		}
//////////////////////////////////////////*/





















/*{
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

}*/

