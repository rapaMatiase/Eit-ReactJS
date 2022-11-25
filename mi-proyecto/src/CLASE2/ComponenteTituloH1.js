
/* 
PARA CREAR UN COMPONENTE DE FUNCION SE NECESITA;
1) Declarar una funcion, y la buena practica dice que se tiene que llamar igual que el archvio donde esta.
2) Tiene que terner un return que devulve "html".
3) No se debe olvidar especificar que funcion (si es que existe varias) se va exportar del archivo (es la que se ejecuta primero cuando Node lee este archivo).

*/

import React from "react";


function ComponenteTituloH1(){

    return (
        <React.Fragment>
            <h1> Hola, como estas?</h1>
            <h3> Sub tituto </h3>
        </React.Fragment>
    );
}

/* 
IMPORTATNE.
En el return la sintaxis de JSX espera que solo se devuelva un elemento de HTML. Por lo que si quiere enviar varios, deben estar contenidos todos dentro de otro elemento de HTML, como puede ser div, o React.Fragment que un elemento especial agregado por react que no modifica en lo mas minimo la apariencia de lo que tiene adentro, pero sirve para juntar todo en un solo elemento.
*/

/* 
Por comentario de una alumno se probo utilizar un par de llaves vacias "<> </>" en vez de un div o React.Fragment, y resulta que funcionan, pero lo tomamos como mala practica porque perdemos la capacidad de reconocer el elemento en si, y no queda claro si es un error o a proposito. 

INVESTIGAR que parece que REACTJS lo interpreta como un div. 
https://thisthat.dev/react-fragment-shorthand-vs-longhand/
*/

export default ComponenteTituloH1;