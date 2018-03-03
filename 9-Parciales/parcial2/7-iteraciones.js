//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
/* 
7-Realizar el algoritmo que al presionar el botón "Mostrar" 
pida por prompt las notas (validar entre 0 y 10) y el sexo(validar el sexo “f” o “m”)
 de 6 alumnos, informar por alert: 
a) el promedio de las notas totales. 
b) la nota más baja. 
c) la cantidad de varones que su nota haya sido mayor o igual a 6.
*/
	var nota;
	var sexo;
	/// i es igual contador
	var i; //no va con =0 por usar el FOR 
	var acumNotas=0
	var promedio;
	var minimo;
	var contVarones =0;
	var flag = 0;

	for(i=0; i<6; i++)
	{
		nota = prompt ("Por favor ingrese las 6 notas correspondientes");
		nota = parseInt (nota);

		while (nota<0 || nota>10)
		{
			nota = prompt ("ERROR, Reingrese nota valida");
		}
        ////* una vez validadas la notas ingresadas proseguimos con el ingreso del sexo y su validacion//////
		
		sexo = prompt ("Ingrese sexo");

		while ( sexo!="m" && sexo !="f")
		{
			sexo = prompt ("ERROR, Reingrese valores de sexo que sean validas");
			sexo = sexo.toLowerCase ();
		}
		
		/*while ( isNaN(sexo) == true && sexo!="m" && sexo !="f")
		*/

		acumNotas = acumNotas + nota;

		if ( flag==0 || nota < minimo )
		{
			minimo = nota;
			flag = 1 ;
		}
	
		if (sexo == "m" && nota >=6)
		{
			contVarones++;
		}

		promedio = acumNotas / i;
		alert ("Promedio es : "+ promedio + " , el minimo : " + minimo + " y la cantidad de variones " + contVarones)
	}

}

