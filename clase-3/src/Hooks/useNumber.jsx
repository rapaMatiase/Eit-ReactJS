/* Crear un hook useState del tipo numerico que tengo una funcion para;
1) Que devuelva true si el valor es positivo, y false si es negativo.
2) Que devuelva true si es par, y false si es impar.

*/

import { useState } from "react";

function useNumber(props){
    const [number, setNumber] = useState(props.valorIncial);

    const signo = () => (number > 0)
    
    const paridad = () => (number % 2 === 0)

    return ([
        number,
        setNumber,
        signo, 
        paridad
    ])
}

export default useNumber;