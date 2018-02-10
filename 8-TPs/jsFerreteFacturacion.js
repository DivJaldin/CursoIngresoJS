/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var PrecioUno;
    var PrecioDos;
    var PrecioTres;
    var Sumar;
    
        PrecioUno = document.getElementById ("PrecioUno").value;
        PrecioUno = parseInt (PrecioUno);

        PrecioDos = document.getElementById ("PrecioDos").value;
        PrecioDos = parseInt (PrecioDos);

        PrecioTres = document.getElementById ("PrecioTres").value;
        PrecioTres = parseInt (PrecioTres);

        Sumar = PrecioUno + PrecioDos + PrecioTres;

    alert ( "la suma da " + Sumar)


}
function Promedio () 
{
        PrecioUno = document.getElementById ("precioUno").value;
        PrecioUno = parseInt (PrecioUno);
	    
        PrecioDos = document.getElementById ("PrecioDos").value;
        PrecioDos = parseInt (PrecioDos);

        PrecioTres = document.getElementById ("PrecioTres").value;
        PrecioTres = parseInt (PrecioTres);

        Promedio = (PrecioDos + PrecioDos + PrecioTres)/ 3 ;
        document.getElementById ("resultado").value = resultado


}
function PrecioFinal () 
{
	
}