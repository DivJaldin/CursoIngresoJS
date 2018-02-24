function Mostrar()
{
    var contador=0
    //msj="los divisores son "
    var num = prompt("ingrese el número");
    //var rep = prompt (ingre...);
    num = parseInt (num) ;
    //for ( i=0 ; i<= num ; i++)
    for (i=num; i > 0 ; i--)
    // if(rep%i==0)
    {   
        if (i % 2==0 )
        {
        contador++;
        //msj=msj+ i
        }
        
    }
    console.log(contador);

}//FIN DE LA FUNCIÓN