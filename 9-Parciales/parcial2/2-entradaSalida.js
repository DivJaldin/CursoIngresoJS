//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var elIva;
	var conIva;

	importe = parseInt (prompt ("Ingrese Importe"));
	
	
	elIva = importe *0.21;
	conIva = importe + elIva;
	document.getElementById ("importe").value =  conIva;
	
}

