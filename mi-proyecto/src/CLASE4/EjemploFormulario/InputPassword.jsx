import { useState } from "react"

function InputPassword(){

    const [password, setPassword] = useState();

    return(
        <input style={{margin : "20px"}} type="text" placeholder="Nombre o Email o Telefono" value={password} onChange={(event)=>(setPassword(event.target.value))} />
    ) 
}

export default InputPassword ;