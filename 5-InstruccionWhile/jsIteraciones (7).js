	function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;
 	var numero;

	
	while (respuesta == true)
	{
		numero = prompt ("ingrese el numero");
		numero = parseInt (numero);
		
		while (numero <1 || numero>10)
		{
			numero = prompt ("Error. reingrese un numero");
			numero = parseInt (numero);
		}

		acumulador+=numero;
		
		contador = contador +1;
		respuesta = confirm ("desea ingresar otro numero?");
		//respuesta = prompt (...)
		
		var contador = 0;
		var positivo = 0;
		var negativo = 1;
	
	}
res = acumulador/contador;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}