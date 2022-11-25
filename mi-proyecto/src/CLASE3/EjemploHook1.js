import { useState } from "react";

function EjemploHook1(){

    //Para crear un HOOK utilizo la funcion useState que viene nativa de reactjs
    const [visibilidad, setVisibilidad] = useState(true);

    const clickCambiarEstadoDeVisibilidad = () =>{
        setVisibilidad(!visibilidad)
    }


    /* { visibilidad ? "" : "🤬"}  Esto es un IF de una linea. */
    return(
        <div>
            <button onClick={clickCambiarEstadoDeVisibilidad}> HACEME CLICK </button>
            {`Texto ${visibilidad}`}
            { visibilidad ? "🤬" : "😍"}

        </div>

    )
    /* 
    Lo que pasa con los if dentro del "HTML", funcionan como cualquier sistema de templates. Para este caso, si visibilidad es verdadera, react remplaza toda la linea 16 por un espacio vacio, lo que equivale a decir, queda la linea vacia. Si es visibilidad es falsa, remplzata la linea 16 por el emoji.
    */

}

export default EjemploHook1;