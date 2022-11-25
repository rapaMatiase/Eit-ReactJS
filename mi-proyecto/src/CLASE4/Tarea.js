/* 
Refactorizar el ejercicio 1 de los monos tal que el contador sume valores sin limete (puede llegar mas lejos que el 2), y cuando;
- El contador sea un numero par muestre el mono con los ojos tapados.
- El contador sea un numero impar muestre el mono con los oidos tapados.
*/

import { useState } from "react";

function ComponenteTareaClase3(){

    const [contador, setContador] = useState(0);

    const sumarUnoAlContador = () =>{
        setContador(contador + 1);
    }

    return(
        <div>
            <button onClick={sumarUnoAlContador}> Sumar </button>
            {`${contador}`}
            {contador % 2 === 0 ? `🙈` : `🙉` }
        </div>
    );
}

export default ComponenteTareaClase3;