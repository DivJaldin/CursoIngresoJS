function Mostrar()
{
    var ancho
    var largo
    var perimetro

        ancho = document.getElementById ("largo").value;
        ancho = parseInt (ancho);
        
        largo = document.getElementById ("largo").value;
        largo = parseInt (largo);

        perimetro = (ancho * 2 + largo * 2);
        //PROBLEMA = REDONDEA RESULTADO A NUMEROS ENTEROS

    alert ("el perimetro necesario es " + perimetro);



}