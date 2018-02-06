
function Mostrar()
{
 var numerolaBase
 var perimetro

        numerolaBase = document.getElementById ("laBase").value;
        numerolaBase = parseInt (numerolaBase);

        perimetro = (numerolaBase * 4);

 alert ("el perimetro es " + perimetro);
}
