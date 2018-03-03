//Realizar el algoritmo que al presionar el botón "Mostrar" pida el importe de las ventas 
//(validar que sea mayor a 0,”cero”) de los 7 días de la semana por prompt (una por día),
 //e informar cual fue el mayor importe y cuál fue el menor importe de venta
function Mostrar()
{
	var importe;
	var i=0;
	var maximoImporte;
	var minimoImporte;
	var flag=false; 
	var maximoDia;
	var minimoDia;
	//bucle de dias 7//
	while (i<7) 
	{
		importe = prompt ("ingrese un importe");
		importe = parseFloat(importe);
/*no voy a utilizar if ya que solamente se ejecutara una sola vez en este bucle
por lo tanto utilizo otro while. genero bucle condicionante dle importe a ingresa
no exite dia negativo asi que*/
		while (importe <=0)
		{
			importe = prompt ("ERROR!!! Reingrese un importe");
			importe = parseFloat(importe);
		}
		/////CON BANDERA DENTRO DE IF (ACHICA EL CODIGO)
	
			if (flag ==false || importe < minimoImporte)
			{
				minimoImporte = importe;

			}
			if (flag == false || importe > maximoImporte)
			{
				maximoImporte = importe;
				flag=true;
			} 
		i++;
	}
		alert ("el maximo es: " + maximoImporte + " y el minimo importe es " + minimoImporte)
}











	/*// MODO CON BANDERA
		//el flag hara que el siguiente if solamente se ejecute una determinada cantidad de veces
		if (flag == 0)
		{
			maximoImporte = importe;
			minimoImporte = importe;
			flag = 1
		}
		else 
		{
			if (importe < minimoImporte)
			{
				minimoImporte = importe;
			}
			if (importe > maximoImporte)
			{
				maximoImporte = importe;
			} 
		i++;
		}*/
// ESTABLESCO REFERENCIAS/CONDICIONANTES - MODO - SIN BANDERA //
///////////////////////////////////////////
/* 
MODO 1 
		if (i==0)
		{
			maximoImporte = importe;
			minimoImporte = importe;
		}
		else 
		{
			if (importe < minimoImporte)
			{
				minimoImporte = importe;
			}
			else 
			{

			}
		}
//////////////////////////////////////////
*/ 

