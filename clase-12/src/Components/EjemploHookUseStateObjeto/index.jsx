import { useState } from "react";

function EjemploHookUseStateObjeto(){

    const [objeto, setObjeto] = useState({name : "matias", lastname : "rapa"})

    const actualizarNombre = (event) =>{
        let name = event.target.value
        //setObjeto(ingresoDelUsuario) //Si hago esto, aplasto el objeto con otro tipo de dato.
        setObjeto((estadoPrevio) => ({
            ...estadoPrevio,
            name
        }))

        // {
        //     ...estadoPrevio,
        //     name : ingresoDelUsuario
        // }
        // EQUIVALE 
        // {
        //     name : "matias", 
        //     lastname : "rapa",
        //     name : ingresoDelUsuario
        // }
    }

    return(
        <div>
            <input type="text" value={objeto.name} onChange={actualizarNombre}/>
            <input type="text" value={objeto.lastname} />

        </div>
    )
}

export default EjemploHookUseStateObjeto;