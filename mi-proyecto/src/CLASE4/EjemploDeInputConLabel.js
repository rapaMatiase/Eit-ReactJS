import { useState } from "react";

function EjemploInput2(){

    const [nombre, setNombre] = useState("Valor por defecto");
    const [cumpleConOchoCaracteres, setCumpleConOchoCaracteres] = useState(true);

    const guardarNombre = (event) =>{
        //event.target.value se le en criollo como "del objeto evento que recibo del motor de JS, saco el elemnto sobre el que ocurrio el evento (el input en este caso) y luego le pidor al input el valor que tiene dentro."
        let nombreIngresado = event.target.value
        setNombre(nombreIngresado)
        tieneOchoCaracteresMas()
    }

    const tieneOchoCaracteresMas = () => {
        if(nombre.length <= 8){
            setCumpleConOchoCaracteres(false)
        }else{
            setCumpleConOchoCaracteres(true)
        }
    }

    return (
        <div>
            <input type="text" value={nombre} onChange={(event)=> {guardarNombre(event)}} />
            {cumpleConOchoCaracteres ? "" : <label style={{color : "red"}}>Tiene que tener ocho caracteres o mas. </label>}
            <label style={{color : "red"}}>{cumpleConOchoCaracteres ? "" : "Tiene que tener ocho caracteres o mas."} </label>
        </div>
    );

}

export default EjemploInput2;