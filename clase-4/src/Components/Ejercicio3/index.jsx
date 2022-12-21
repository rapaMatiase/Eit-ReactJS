import { useRef, useState } from "react";

function Ejercico3(){

    const [objeto, setObjeto] = useState({});

    const InputNameRef = useRef();
    const InputUsernameRef = useRef();
    const InputPasswordRef = useRef();

    const nuevoNombreIngresado = () => {
        setObjeto((estadoPrevio) =>({
            ...estadoPrevio,
            [InputNameRef.current.name] :InputNameRef.current.value
        }))
    }

    const nuevoNicknameIngresado = () => {
        setObjeto((estadoPrevio) =>({
            ...estadoPrevio,
            [InputUsernameRef.current.name] :InputUsernameRef.current.value
        }))
    }

    const nuevoPasswordIngresado = () => {
        setObjeto((estadoPrevio) =>({
            ...estadoPrevio,
            [InputPasswordRef.current.name] :InputPasswordRef.current.value
        }))
    }

    return (
        <div>
            <form action="">
                <input 
                    ref={InputNameRef} 
                    onChange={nuevoNombreIngresado} type="text" name="name" />
                <input 
                    ref={InputUsernameRef} 
                    onChange={nuevoNicknameIngresado} type="text" name="username" />
                <input 
                    ref={InputPasswordRef} 
                    onChange={nuevoPasswordIngresado} type="password" name="password" />

            </form>
        </div>
    )
}

export default Ejercico3;

/* 

Crear un formulario con tres campos; nombre, nickname, contraseña.

Guardar todo en un solo HOOK-UseState del tipo objeto.
12.18
*/