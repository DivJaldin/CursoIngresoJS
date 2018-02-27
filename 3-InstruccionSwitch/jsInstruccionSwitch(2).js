function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mesDelAño').value;

alert (mesDelAño);
switch (mesDelAño)
    {
        case "Enero":
        case "Febrero": 
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert ("Falta para el invierno.")
           { break;}
        case "Julio":
        case "Agosto":
            alert("Abrigate que hace frio.");
            {break;}
        case ("septiembre"):
        case "Ocutbre":
        case "Noviembre":
        case "Diciembre":
            alert ("Ya pasamos el frio, ahora calor!!!");
            {break;}
    }


}//FIN DE LA FUNCIÓN