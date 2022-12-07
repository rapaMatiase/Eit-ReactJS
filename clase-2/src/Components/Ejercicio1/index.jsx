/* Realizar un componente que visualmente sea una caja de 100x100 px con un contador adentro que sume de a uno cada vez que el usuario haga click. El color de la caja debe ser verde cuando el valor del contador es par, y amarilla cuendo el valor del contador es impar.
10.42
*/

import { useState } from "react";

function Ejercicio1(){
    const [contador, setContador] = useState(0);

    const estilo = {
        height : 100,
        width : 100,
        backgroundColor : contador % 2 === 0 ? "green" : "yellow"
    }

    const contandoClicks = () => {
        setContador(contador + 1)
    }

    return(
        <div style={estilo} onClick={contandoClicks}>{contador}</div>
    )
}

export default Ejercicio1;