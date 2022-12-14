import { useState } from "react"

function Contador(){

    const [contador, setContador] = useState(0);
    const [contadorConEstado, setContadorConEstado] = useState(0);
    
    /* Si yo necesito actualizar un HOOK varias veces dentro de una misma funcion, utilizo el estado previo para que cada vez que ejetuce el SET de se HOOK se actue sobre el estado actual del mismo, y no sobre el estado que tenia al comenzar la funcion en ejecucion.  */

    const contarClicks = () =>{
        setContador(contador + 1)
        setContador(contador + 1)
        setContador(contador + 1)
    }

    const contarClicksConEstado = () =>{
        setContadorConEstado((estadoPrevio)=>(estadoPrevio +1))
        setContadorConEstado((estadoPrevio)=>(estadoPrevio +1))
        setContadorConEstado((estadoPrevio)=>(estadoPrevio +1))
    }
    return (
        <div>
            <div
                style={{height : 100, width: 100, backgroundColor : "green"}}
                onClick={contarClicks}
            >
                {contador}
            </div>
            <div
                style={{height : 100, width: 100, backgroundColor : "red"}}
                onClick={contarClicksConEstado}
            >
                {contadorConEstado}
            </div>
        </div>
    )
}

export {Contador};