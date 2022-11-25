import { useState } from "react";

function EjemploInput1(){

    const [nombre, setNombre] = useState("Valor por defecto");

    const guardarNombre = (event) =>{
        //event.target.value se le en criollo como "del objeto evento que recibo del motor de JS, saco el elemnto sobre el que ocurrio el evento (el input en este caso) y luego le pidor al input el valor que tiene dentro."
        let nombreIngresado = event.target.value
        setNombre(nombreIngresado)
    }

    return (
        <div>
            <input type="text" value={nombre} onChange={(event)=> {guardarNombre(event)}} />
            {`${nombre}`}
        </div>
    );

}

export default EjemploInput1;