import { useState } from "react"

function InputNombre(){

    const [nombre, setNombre] = useState();

    return(
        <input style={{margin : "20px"}} type="text" placeholder="Nombre o Email o Telefono" value={nombre} onChange={(event)=>(setNombre(event.target.value))} />
    ) 
}

export default InputNombre;