import React, {useState} from "react";

function Contador(){
    
    /* Un useState es un tipo de HOOK que me permite crear una variable que convserva su estado durante el ciclo de vida de REACT. */
    const [contadorSinEstadoPrevio, setContadorSinEstadoPrevio] = useState(0);
    const [contadorEstadoPrevio, setContadorEstadoPrevio] = useState(0);

    const contarSinEstadoPrevio = () => {
        //Inicio con 0
        setContadorSinEstadoPrevio(contadorSinEstadoPrevio + 1)
        setContadorSinEstadoPrevio(contadorSinEstadoPrevio + 1)
        setContadorSinEstadoPrevio(contadorSinEstadoPrevio + 1)
        //Deberia finalizar con un 3, pero al final solo sumo 1.
    }
    /* Cuando quiero moficiar un mismo hook varias veces en una misma funcion, necesito hacer uso del estado previo. Eso signigica pasar una funcion como argumento al set del hook, y esta funcion tiene como argumento el estado previo del hook. Por si solo, React, se hace cargo de ir a consultado al momento de ejecutar. Algunos tipos de datos, necesitan si o si el estado previo para ser modificados. */
    const contarEstadoPrevio = () => {
        //Inicio con 0
        setContadorEstadoPrevio((estadoPrevio)=> estadoPrevio + 1)
        setContadorEstadoPrevio((estadoPrevio)=> estadoPrevio + 1)
        setContadorEstadoPrevio((estadoPrevio)=> estadoPrevio + 1)
        //Deberia finalizar con un 3, pero al tengo un 3.
    }

    return (
        <React.Fragment>
            <div 
                onClick={contarSinEstadoPrevio} 
                style={{height : 100, width: 100, backgroundColor : "red", fontSize : 50}} 
            >
                {contadorSinEstadoPrevio}
            </div>
            <div 
            onClick={contarEstadoPrevio} 
            style={{height : 100, width: 100, backgroundColor : "green", fontSize : 50}} 
            >
                {contadorEstadoPrevio}
            </div>
        </React.Fragment>
    )
}

export default Contador;