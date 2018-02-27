//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var elIva;
	var conIva;

	importe = parseInt (prompt ("Ingrese Importe"));
	
	
	elIva = importe *0.21;
	conIva = importe + elIva;
	alert("importe final sumándole el IVA (21%) es "+ conIva);
	
}

