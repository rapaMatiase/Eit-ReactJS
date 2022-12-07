import React from "react";

function Ejemplo1(){

    return (
        <div>
            <div> 1</div> 
            <div> 2 </div>
        </div>
    )
}

function Ejemplo1B(){

    /* El elemento de react.Fragmente sirve para englobar varios elementos de HTML en un solo bloque o padre para el return. No agrega ningun estilo o modificacion.  */
    return (
        <React.Fragment>
            <div> 1</div> 
            <div> 2 </div>
        </React.Fragment>
    )
}

function Ejemplo1C(){

    /*El <> y </> es equivalente a escribir <React.Fragment> </React.Fragment>, simplemente es una version simplificada.    */
    return (
        <>
            <div> 1</div> 
            <div> 2 </div>
        </>
    )
}

export  {Ejemplo1, Ejemplo1B, Ejemplo1C};