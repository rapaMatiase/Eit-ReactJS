/* 

Realizar un componente con tres estados, basado en un contador.

Cuando el contador esta en 0, mostrar el emoji 🙊
Cuanod el contador esta en 1, mostrar el emoji 🙉
Cuando el contador esta en 2, motrar el emoji 🙈
Al llegar al estado 2, volver al 0.

PISTA: Le sumas uno mientras el contador sea menor 2. CUando sea 2, igual a 0.
*/

import { useState } from "react";

function Ejercicio1(){

    const [contador, setContador] = useState(0);

    const sumandoAlContador = () => {
        if(contador < 2){
            setContador(contador + 1)
        }else{
            setContador(0)
        }
    }

    return (
        <div>
            <button onClick={sumandoAlContador}> Click me</button>
            {contador === 0 ? "🙊" : ""}
            {contador === 1 ? "🙉" : ""}
            {contador === 2 ? "🙈" : ""}

            {contador === 0 ?  "🙊" : contador === 1 ? "🙉" : "🙈"}

        </div>
    )
}

export default Ejercicio1;