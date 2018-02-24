function Mostrar()
{

sexo = prompt("ingrese f ó m .");

 while (sexo !="f" &&  sexo!="m")
 //pregunto por lo que quiero que pase, 
 // ||con que una delas dos sea verdad esta se me tira en al validacion
        {
           sexo = prompt("reingrese f o m.");ç
           if (sexo ==null) 
	break;
        }
if (sexo=="f") 
                {
                    femenino = prompt("sexo femenino");
                }
else 
                {
                    masculino = prompt ("sexo masculino");;
                }

document.getElementById('Sexo').value=sexo;
}
//FIN DE LA FUNCIÓN
//CORREGIR  