import { useState } from "react";

const estilos = {
    habilitado : {
        color : "white",
        backgroundColor : "black"
    },
    inhabilitado : {
        color : "grey",
        backgroundColor : "yellow"
    }
}
function EjemploHook2(){

    //Para crear un HOOK utilizo la funcion useState que viene nativa de reactjs
    const [habilitar, setHabilitar] = useState(true);

    const cambiarHabilitacion = () =>{
        setHabilitar(!habilitar)
    }

    

    return(
        <div>
            <button onClick={cambiarHabilitacion}> HACEME CLICK </button>

            <p style={habilitar ?  estilos.habilitado: estilos.inhabilitado} > TEXTO </p>
            <button disabled={habilitar}> HABILITADO ? </button>
        </div>
    )
    /* 
    Lo que pasa con los if dentro del "HTML", funcionan como cualquier sistema de templates. Para este caso, si visibilidad es verdadera, react remplaza toda la linea 16 por un espacio vacio, lo que equivale a decir, queda la linea vacia. Si es visibilidad es falsa, remplzata la linea 16 por el emoji.
    */

}

export default EjemploHook2;