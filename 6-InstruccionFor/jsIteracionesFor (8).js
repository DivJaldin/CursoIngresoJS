function Mostrar()
{
var contador=0 
var num;
num = prompt ("ingrese");
    for (i=1; i <=num ; i++)
    {
        if (num%i==0)
        {
            contador++;
        }
        if (contador >=3)
        { alert (" no es primo");
        }
        else
        { alert ("valido")}

    }
}//FIN DE LA FUNCIÓN