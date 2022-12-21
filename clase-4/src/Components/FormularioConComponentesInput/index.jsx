import { useState } from "react";
import Ejercicio1 from "../Ejercicio1";
import InputConMensaje from "../InputConMensaje";



function FormularioConComponentesInput(){

    const [objetoUsuario, setObjetoUsuraio] = useState({});

    const guardarValorIngresado = (nombre, valor, cumple)=> {
        setObjetoUsuraio((estadoPrevio) => ({
            ...estadoPrevio,
            [nombre] : valor
        }))

    }

    return (
        <div>
            <form action="">
                <InputConMensaje name="passrowd" setValor={guardarValorIngresado} />
                <InputConMensaje name="segundaPassword" setValor={guardarValorIngresado} />
                
            </form>
        </div>
    )
}

export default FormularioConComponentesInput;