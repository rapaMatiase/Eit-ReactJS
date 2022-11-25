import React from "react";

/* 
Puedo agregar propiedades de CSS en los componentes de REACT tal cual lo asi en HTML, pero los nombres de las propiedades de CSS no responden mas a la nomesclatura de keb-case, si no camelCase. Por ejemplo background-color, pasa a ser backgroundColor.
*/

function ComponenteTituloH1(){

    return (
        <React.Fragment>
            <h1 style={{backgroundColor : "red"}}> Hola, como estas?</h1>
            <h3> Sub tituto </h3>
        </React.Fragment>
    );
}

export default ComponenteTituloH1;