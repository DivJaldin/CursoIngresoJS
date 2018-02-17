function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;

nota =  Math.floor ((Math.random ()*(10-1))+1);
if (nota >=9)
	{
		alert ("EXCELENTE")
	}
else if (nota>=8)
	{
		alert ("MUY BIEN")
	}
else if (nota >=6)
	{
		alert ("APROBÓ")
	}
else if (nota>=3)
	{
		alert ("MAL")
	}
else if (nota>=1)
	{
		alert ("PÉSIMO")
	}
}//FIN DE LA FUNCIÓN