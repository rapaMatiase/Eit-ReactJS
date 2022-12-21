import { useRef, useState } from "react";

function RepasoHookUseStateObjeto(){

    const [objeto, setObjeto] = useState({name : "Dainel"})

    const inputNameRef = useRef();

    const guardarNombre = (event) =>{
        event.preventDefault();
        let name = inputNameRef.current.value
        setObjeto((estadoPrevio) =>({
            ...estadoPrevio,
            name
        }))
    }


    return (
        <div>
            <form action="" onSubmit={guardarNombre}>
                <input type="text" ref={inputNameRef} />
                <input type="submit" value="enviar" />
            </form>
            
        </div>
    )
}

export default RepasoHookUseStateObjeto;