/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno
    var precioDos
    var precioTres
    var sumar
    
        precioUno = document.getElementById ("precioUno").value;
        precioUno = parseInt ("precioUno");

        precioDos = document.getElementById ("precioDos").value;
        precioDos = parseInt ("precioDos");

        precioTres = document.getElementById ("precioTres").value;
        precioTres = parseInt ("precioTres");

        sumar = precioUno + precioDos + precioTres;

    alert ( "la suma da " + sumar)


}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	
}