import { useState } from "react"

function EjemploHookUseStateTipoArray(){

    const [nombre, setNombre] = useState("");
    const [array, setArray] = useState([
            "Manuel", 
            "Jonathan", 
            "Gullermo", 
            "Damian"
        ]);

    const agregarNuevoAmigo = () =>{
        setArray((estadoPrevio) => [...estadoPrevio, nombre])
    }

    const eliminarAmigo = () => {
        let copiaDelArray = array
        let arrayFiltrado = copiaDelArray.filter((item)=>{return item !== nombre})
        setArray(arrayFiltrado)
    }

    /* Crear una funcion que invierta el orden del array.  */
    const invertirAmigo = () => {
        let copiaDelArray = array
        let arrayInvertido = copiaDelArray.reverse()
        console.log(copiaDelArray)
        setArray(arrayInvertido)
        /* PENDIENTE CLASE PROXIMA. */
    }

    /* 
    const reverseFriends = () => {
    setArray((old) => [...old].reverse());
  };

    */

    return (
        <div>
            <h3>Lista de amigos de Anderson: </h3>
            <ul>
                {array.map((item)=>(<li> {item} </li>))}
            </ul>
            <input type="text" onChange={(event)=>{setNombre(event.target.value)}} /> 
            <button onClick={agregarNuevoAmigo} >Agregar nuevo amigo </button> 
            <button onClick={eliminarAmigo} >Eliminar amigo </button> 
            <button onClick={invertirAmigo} > Invertir </button>
        </div>
    )

}

export default EjemploHookUseStateTipoArray;