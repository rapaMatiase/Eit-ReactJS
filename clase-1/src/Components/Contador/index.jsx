//useState es una funcion nativa de react que crea HOOK.
import { useState } from "react"

function Contador(){

    let contador = 0
    
    //const [nombreDelHook, nombreDeLaFuncionDeActualizacionDelHook] = useState(valor inicial);
    const [contadorHook, setContadorHook] = useState(0);

    /* 
    Las variables tradicionales no son compatibles con el cliclo de recarga de React. Cada vez que este se ejecuta, re inicializa el valor de la variable, por lo que le sumamos 1, pero luego vuelva a inicializar la variable en 0, por eso nunca vemos el contador variable subir. 
    
    Los HOOK son variables para las cuales react antes de pasar por el ciclo de recarga, guarda su estado, y antes de recargar la interfaz, le devuelve el estado anterior al HOOK, por eso el contador HOOK si sube su valor. 
    */

    const contar = () => {
        console.log("Me hiciste click")
        contador++
        setContadorHook(contadorHook + 1)
    }

    return(
        <div>
            <p>Contador variable: {contador} </p>
            <p>Contador hook:  {contadorHook}</p>

            <button onClick={contar} > Contar </button>
        </div>
    )
}

export default Contador;