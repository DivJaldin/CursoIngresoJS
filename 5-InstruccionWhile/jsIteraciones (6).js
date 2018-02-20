function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while (contador < 5)
	{
		numero = prompt ("ingrese el numero");
		//genero la ventana para ingresarls.
		numero = parseInt (numero);
		acumulador+=numero;
		if (contador==3);
		
	}
res = acumulador/contador;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN