//Realizar el algoritmo que al presionar el botón "Mostrar" pida un mes del año por prompt,
 //si es un "enero" o "febrero" informar por alert “Veranito!!!!” 
 //de lo contrario informar por alert “extraño enero y febrero!!!” 
function Mostrar()
{
	var mesDelAño;
	mesDelAño = prompt("mesDelAño");
	//mesDelAño = toLowerCase("mesDelAño"); 
	/* toLowerCase() 
	/* toUpperCase ()*/
	switch (mesDelAño)
	{
		case "Enero":
		case "Febrero":
		alert ("Estamos el veranitooo!!!");
			break;
		/* utilizacion del DEFAULT PARA EVITAR ESCRIBIR UNA CADENA*/
		default:
			alert("Extraño Enero y Febrero");
	}
}
	/* var mesDelAño = prompt ("mesDelAño");
	switch (mesDelAño) {
		case "Enero":
		case "Febrero":
		alert ("veranito!!!!");
			break;
	
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviemrbre":
		case "Diciembre":
		alert ("extraño enero y febrero")
			break;
			
	}
}
*/
