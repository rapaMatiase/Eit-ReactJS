import { useRef, useState } from "react";
import { Ejercicio1bis } from "../Ejercicio1";

function Formulario(){

    const [objetoUsuario, setObjetoUsuario] = useState({});

    const inputNameRef = useRef();
    const inputPasswordRef = useRef();

    const cambioIngresoNombre = () =>{
        setObjetoUsuario((estadoPrevio)=>({
            ...estadoPrevio,
            [inputNameRef.current.name] : inputNameRef.current.value
        }))
    }

    const cambioIngresoPassword = () =>{
        setObjetoUsuario((estadoPrevio)=>({
            ...estadoPrevio,
            [inputPasswordRef.current.name] : inputPasswordRef.current.value
        }))
    }


    const enviarInformacion = (event) =>{
        event.preventDefault();

    }
    return(
        <div>
            <form action="" onSubmit={enviarInformacion} >
                <input 
                    type="text" 
                    placeholder="nombre"
                    name="name" 
                    ref={inputNameRef} 
                    onChange={cambioIngresoNombre}
                    />
                <input 
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    ref={inputPasswordRef}
                    onChange={cambioIngresoPassword}
                    />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}


export default Formulario;