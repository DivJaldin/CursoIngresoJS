//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;
	ancho = document.getElementById ("ancho").value;
	largo = document.getElementById ("largo").value;
	ancho = parseInt ("ancho");
	largo = parseInt ("largo");

	perimetro = ancho *2 + largo *2;
	alambreT= perimetro * 6;
	alert ("La cantidad necesaria de alambre es " + alambreT);


	
	/*var ancho;
	var largo;
	var perimetro;
	var alambreTotal;

	ancho = parseInt (document.getElementById ("ancho").value);
	largo = parseInt (document.getElementById ("largo").value);

	perimetro = ancho * 2 + largo *2;
	alambreTotal = perimetro *6
	alert("La cantidad de alambre necesaria es " + alambreTotal);
	*/
}

