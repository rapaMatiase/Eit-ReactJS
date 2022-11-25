/* 
Crear un input del tipo password (EN el atributo type ponen password), y guardar en un hook, la contraseña ingresada por el usuario. Imprimir en pantalla la misma.

4min 18.36

*/

import { useState } from "react";

function Clase4Ejercicio1(){

    const [passowrdIngresada, setPasswordIngresada] = useState("vacio");

    const guardarPassword = (e) =>{
        let passwordDelInput = e.target.value
        setPasswordIngresada(passwordDelInput)
    }
    
    return (
        <div>
            <input  type="password" value={passowrdIngresada} onChange={(e)=>{guardarPassword(e)}} />
            {`${passowrdIngresada}`}
        </div>
    );
}

export default Clase4Ejercicio1;