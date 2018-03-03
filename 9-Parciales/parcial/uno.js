
function Mostrar()
{
 var numerolaBase
 var perimetro

        numerolaBase = document.getElementById ("laBase").value;
        numerolaBase = parseInt (numerolaBase);
        /* numerolaBase = parseFloat (numerolaBase);
        la diferencia es que el parse int me devuelve un numero redondeado
        el parsefloat no, solo lo vuelve numero; */
        perimetro = (numerolaBase * 4);

 alert ("el perimetro es " + perimetro);
}
