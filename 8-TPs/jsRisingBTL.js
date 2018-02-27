/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	edad, entre 18 y 90 años inclusive.
B. sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

// var cadena = "cadena".toLowerCase();
// cadena = cadena.toLowerCase();

function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var sueldo;
    var estadoCivil;
    var legajo;
    var nacionalidad;
{
    var contadorM= 0
        for (var i=0; i < 1 ; i++)
        {
            pedirDatos ();

            if (sexo == "m")
            { 
                contadorM++;
            }
        }

}
function pedirDatos ()
{
    pediredad();
    pedirsexo();
    pedirEstado();
    pedirSueldo();
    pedirlegajo();
    pedirnacionalidad ();

    asignarDatos();
}
    
/////////////////////////////////////////////////
function asignarDatos()
{
    document.getElementById ("edad").value = edad;
    document.getElementById ("sexo").value = sexo;
    document.getElementById ("Estado").value = Estado;
    document.getElementById ("Sueldo").value = Sueldo;
    document.getElementById ("legajo"),value = legajo,
    document.getElementById ("nacionalidad").value = nacionalidad;
}
/////////////////////////////////////////////////////
function pediredad ()
{
    do
    {
        edad = prompt ("ingrese edad entre 18 y 90 años");
        edad = parseInt (edad)
    }
    while ( edad >= 18 || edad <=90 || isNaN (edad));
}
//////////////////////////////////////////////////// 
function pedirsexo ()
{
    do
    {
        sexo = prompt ("ingresar sexo, m o f");
    }
    while (sexo.toLowerCase () != "f" && sexo.toLowerCase ()!="M")
    
}
/////////////////////////////////
function pedirSueldo ()
{
    if ( sueldo>=8000){}
}
///////////////////////////////////
function pedirestadoCivil ()
{
   switch ( estadoCivil )
   {
       case 1:
            estadoCivil = "soltero";
            break;
       case 2:
            estadoCivil = "casado";
            break;
       case 3:
            estadoCivil = "divorciado";
            break;
       case 4:
            estadoCivil = "viudo";
            break;
   }
}
///////////////////////////////////
function pedirlegajo ()
{
    do
    {
        legajo = document.getElementById ("legajo").value;
        legajo = paseInt (legajo);
    }
    while ( legajo < 1000 || isNaN (legajo));
}
////////////////////////////////////
function pedirnacionalidad ()
{
    do
    {
        nacionalidad = prompt ("nacionalidad: ingrese -A- si es argentino, ingrese -E-  si es extrangero, ingrese -N- si es nacionalizado").value;
    }
    while (nacionalidad.toLowerCase () != "a" && nacionalidad.toLowerCase () !="e" && nacionalidad.LowerCase () !="e")
    switch (nacionalidad)
        {
            case a:
                nacionalidad = "argentino";
                break;
            case e:
                nacionalidad = "extranjero";
                break;
            case n:
                nacionalidad = "nacionalizado";
                break;
    }
    }
}
///////////////////////////////////////
