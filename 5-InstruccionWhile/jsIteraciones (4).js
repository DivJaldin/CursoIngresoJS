function Mostrar()
{


	var numero = prompt("ingrese un número entre 0 y 10.");

//	while (numero<0 || numero >10) //no puedo usar el && por ser una diyuncion.

	while (isNaN(numero)|| (!( numero >=1 && numero <=10))) //si esto no se cumple es porque esta fuera delintervalo

	{
			//if (numero == null);
			//{alert ("falso")};
			
			numero = prompt (" invalido, reingrese");
	}
	alert ("bienvenido");

}
//FIN DE LA FUNCIÓN

//isNaN is nat a number
//devuelve un verdadero en caso de no ser un numero