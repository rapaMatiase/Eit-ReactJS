import { useState } from "react";

function Contador({contador, sumarUno}){

    return (
        <div>
            {contador}
            <button onClick={()=>{sumarUno()}} > Contar </button>
        </div>
    )
}

export default Contador;