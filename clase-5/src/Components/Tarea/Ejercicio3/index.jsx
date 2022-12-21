import { useRef, useState } from "react";
import Ejercicio1 from './../Ejercicio1';
import Ejercicio2 from './../Ejercicio2';


function Ejercico3(){

    const [objeto, setObjeto] = useState({});

    const setValor = (nombre, valor) =>{
        setObjeto((estadoPrevio) =>({
            ...estadoPrevio,
            [nombre] : valor
        }))
    }

    return (
        <div>
            <form action="">

                <Ejercicio1 setValor={setValor} nombre="password" />
                
                <Ejercicio2 setValor={setValor} nombre="name" />

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