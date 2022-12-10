import { useState } from "react";

const valorInicial = {name : "Alexis", lastName : "Lacour"}

function EjemploHookDeObjetos(){

    const [usuario, setUsuario] = useState(valorInicial)

    const guardarNuevoNombreDeUsuario = (event) => {
        let textoIngresado = event.target.value
        /* Si no utilizo la notacion de funcion con el estado previo y el descontructor de objetos, cambio el tipo del HOOK perdiendo el tipo objeto y todos los otros atributos. */
        //setUsuario(textoIngresado) //Esto esta MAL.
        
        /* Esta es al forma correcta, donde paso el estado anterior y lo descontrullo (los tres puntitos) y luego agrego los valores para los atributos que cambian de valor. Siempre tiene que ser en este orden, porque JS para dos atributos con el mismo nombre, deja como valor, el ultimo valor leido. VER SIPPET de descontruccion. */
        setUsuario((estadoPrevio) => ({
            ...estadoPrevio, 
            name : textoIngresado
        }))
    }

    const guardarNuevoApellidoDeUsuario = (event) => {
        //Al texto ingresado lo llamo igual que el atributo del objeto del HOOK.
        let lastName = event.target.value

        //Por otra actualizacion de ECMAScript, escibir {lastName : textoIngresado} o {lastName}, siendo esta ultima una variable con el valor a gurdar con el mismo nombre que el atributo a cambiar, son sintaxis equivalentes.
        setUsuario((estadoPrevio) => ({
            ...estadoPrevio,
            lastName,
            //lastName : lastName
        }))
    }

    return (
        <div>
            <label htmlFor=""> Nombre : </label>
            <input type="text" name="name" onChange={guardarNuevoNombreDeUsuario} value={usuario.name} />
            <label htmlFor=""> Apellido : </label>
            <input type="text" onChange={guardarNuevoApellidoDeUsuario} name="name" value={usuario.lastName} />

        </div>
    )
}


export default EjemploHookDeObjetos;