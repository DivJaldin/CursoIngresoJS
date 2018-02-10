/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo
    var porcentaje
    var resultado

        sueldo = document.getElementById ( "sueldo" ).value;
        sueldo = parseInt (sueldo);
        porcentaje = sueldo * 0.1;
        resultado = porcentaje + sueldo;

        document.getElementById ("resultado").value = resultado;
        


}
