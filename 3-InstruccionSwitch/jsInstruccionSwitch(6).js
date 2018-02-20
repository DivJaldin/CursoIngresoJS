function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
alert (laHora);

	switch (laHora)
        {
            case "7":
            case "8":
            case "9":
            case "10":
            case "11":
                alert ("es la mañana");
            break;

            case "12":
            case "13":
            case "14":
            case "15":
            case "16":
            case "17":
            case "18":
                alert ("es la tarde");
            break;

            case "19":
            case "20":
            case "21":
            case "22":
            case "23":
                alert ("es la noche");
            break;

            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
                alert ("es la madrugada");
            break;
        
            default: 
                alert ("falso")
            break;
        }
             
	

}//FIN DE LA FUNCIÓN