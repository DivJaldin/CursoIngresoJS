function Mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var maximo ;
	var minimo ;
	var contador=0;
	var flag=0;
	// declarar variables
	
	var respuesta=true;

	while(respuesta==true)
	{
		numero = prompt ("Ingrese un numero");
		numero = paseInt (numero);

		while (numero <1 || numero >10 )
		{
			numero = prompt ("reingrese un numero");
			numero = parseInt (numero);
		}

		if (flag==0)
		{
			maximo = numero;
			minimo = numero;
			flag=1;
		}

		else
		{
			if (numero>maximo)
			{
			maximo = numero;
			}
			if (numero<minimo)
			{
			minimo= numero;
			}
		}
	acumulador - acuamulador+ numero;
	contador = contador +1
	}
alert ("Minimo:  " + minimo + "Maximo" + maximo )
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;


}//FIN DE LA FUNCIÓN