/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B. Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Suledo bruto, no menor a 8000.
E.	Número de Legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

// var cadena = "cadena".toLowerCase();
// cadena = cadena.toLowerCase();

function ComenzarIngreso () 
{
    var Edad;
    var Sexo;
    var Suledo;
    var EstadoCivil;
    var Legajo;
    var Nacionalidad;
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
    pedirEdad();
    pedirSexo();
    pedirEstado();
    pedirSueldo();
    pedirLegajo();
    pedirNacionalidad ();

    asignarDatos();
}
    
/////////////////////////////////////////////////
function asignarDatos()
{
    document.getElementById ("Edad").value = Edad;
    document.getElementById ("Sexo").value = Sexo;
    document.getElementById ("Estado").value = Estado;
    document.getElementById ("Sueldo").value = Sueldo;
    document.getElementById ("Legajo"),value = Legajo,
    document.getElementById ("nacionalidad").value = Nacionalidad;
}
/////////////////////////////////////////////////////
function pedirEdad ()
{
    do
    {
        Edad = prompt ("ingrese edad entre 18 y 90 años");
        Edad = parseInt (Edad)
    }
    while ( Edad >= 18 || Edad <=90 || isNaN (Edad));
}
//////////////////////////////////////////////////// 
function pedirSexo ()
{
    do
    {
        Sexo = prompt ("ingresar sexo, m o f");
    }
    while (Sexo.toLowerCase () != "f" && Sexo.toLowerCase ()!="M")
    
}
/////////////////////////////////
function pedirSueldo ()
{
    if ( Suledo>=8000){}
}
///////////////////////////////////
function pedirEstadoCivil ()
{
   switch ( EstadoCivil )
   {
       case 1:
            EstadoCivil = "soltero";
            break;
       case 2:
            EstadoCivil = "casado";
            break;
       case 3:
            EstadoCivil = "divorciado";
            break;
       case 4:
            EstadoCivil = "viudo";
            break;
   }
}
///////////////////////////////////
function pedirLegajo ()
{
    do
    {
        Legajo = document.getElementById ("Legajo").value;
        Legajo = paseInt (Legajo);
    }
    while ( legajo < 1000|| isNaN (Legajo));
}
////////////////////////////////////
function pedirNacionalidad ()
{
    do
    {
        Nacionalidad = prompt ("Nacionalidad: ingrese -A- si es argentino, ingrese -E-  si es extrangero, ingrese -N- si es nacionalizado").value;
    }
    while (nacionalidad.toLowerCase () != "a" && nacionalidad.toLowerCase () !="e" && nacionalidad.LowerCase () !="e")
    switch (Nacionalidad)
        {
            case a:
                Nacionalidad = "argentino";
                break;
            case e:
                Nacionalidad = "extranjero";
                break;
            case n:
                Nacionalidad = "nacionalizado";
                break;
    }
    }
}
///////////////////////////////////////
