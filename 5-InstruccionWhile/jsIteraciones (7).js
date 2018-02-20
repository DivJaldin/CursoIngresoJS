function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si",msj;
	var msjOk ="Ingrese un numero o cancelar";
	var msjError = "Error: El valor ingresado  tiene que ser mero";
	 msj = msjOk;

while (true)
{
	// pido numero
	respuesta= prompt (msj);
	// seteo mensaje
	msj = msjOk;
	// verifico btn cancelar
	if (respuesta ==null) 
	break;
	respuesta = parseInt (respuesta);
	// Verifico que sea un numero
	if (isNaN (respuesta))
		{
			msj = msjError;
			continue;
		}
	//Hago las operaciones
		acumulador += respuesta;
		contador++;
}
document.getElementById ('suma').value = acumulador;
document.getElementById ('promedio').value = acumulador/contador;
		
}

// no usar acumulador+=respuesta
//FIN DE LA FUNCIÓN
//respuesta = respuesta + numero
//promedio= respuesta/contador;