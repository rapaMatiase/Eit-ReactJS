
let objeto = {
    name : "virginia",
    lastname : "gallo",
    age: 18,
    name : "Diego"
}


function antesDeE7(datosPersonales){
    let name = datosPersonales.name
    let lastname = datosPersonales.lastname
    let age = datosPersonales.age
    //Ahora puedo trabajar con los datos por separado.
    
}

//Descontruccion de objetos
function despuesDeE7(datosPersonales){
    /*Cuando descontrullo, JS solito me guarda el valor del atributo en la variable del mismo valor.*/
    let {lastname, name, age} = {...datosPersonales}
    //Ahora puedo trabajar con los datos por separado.   
}

console.log(objeto)

/* ¿Que nombre tiene el objeto? Diego, porque el ultimo valor leido para un mismo atributo, es le valido. */

/* Esto es JAVASCRIPT PURO, y no esta relacionado al proyecto de react, lo podes ejecutar directo en consoal.  */