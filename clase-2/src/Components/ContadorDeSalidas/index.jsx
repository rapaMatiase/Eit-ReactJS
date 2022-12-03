import { useState } from 'react';
import './style.css';


/* Crear un componente de color rojo y forma circular (radius-border), que cuente la cantidad de veces que el mouse salio de el. Utilizar el evento mouseLeave como detonante. 

Colocar este contador alado del contador de entradas.

5min 10.38
*/

function ContadorDeSalidas(){
    const [contador, setContador] = useState(0);

    const mosueSalio = () =>{
        setContador(contador + 1)
    }

    return(
        <div>
            CONTADOR DE SALIDAS
            <div id="contadorSalidas" onMouseLeave={mosueSalio} > {contador} </div>
        </div>
    )
}

export default ContadorDeSalidas;