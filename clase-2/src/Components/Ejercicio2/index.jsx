/* 

*/

import { useState } from "react";

function Ejercicio2(){

    const [texto, setTexto] = useState("");

    const guardarIngreso = (event) =>{
        let el = event.target
        let textoIngresado = el.value
        setTexto(textoIngresado)
    }

    return (
        <div style={{display : "flex", flexDirection : "column"}}>
            <img src={"https://picsum.photos/seed/picsum/300/100"} alt="" />
            <input 
                type="text" 
                placeholder="Escriba algo para buscar" 
                onChange={guardarIngreso} 
                value={texto} />
        </div>
    )
}

export default Ejercicio2;