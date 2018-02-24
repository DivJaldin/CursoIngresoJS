function Mostrar()
{
 
var intentos = 0
var clave = prompt("ingrese el número clave.");
//while (clave!= "utn750" && clave !== null )
    while (clave!= "utn750" && clave<2)
    {
        
        clave = prompt("Error. Ingrese su clave");
        intentos++; //forma contraida de...
        //intentos = intentos + 1 .
    }
    alert ("Bienvenido al sistema")
}//FIN DE LA FUNCIÓN
//&& nos permitira salir del bucle de peticion de clave

//{
  //  if (clave ==null)
    //    break;
      //  continue:
