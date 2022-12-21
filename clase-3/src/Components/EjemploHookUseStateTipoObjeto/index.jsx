import { useState } from "react";

/* El estado previo casi siempre se utiliza para manipular los HOOK del tipo objeto, pero no para los array. */

function EjemploHookUseStateTipoObjeto(){

    const [objeto, setObjeto] = useState({ nombre : "Yudith", contrasenia : "1234223"})

    const guardarNuevoNombre = (event) => {
        let nombre = event.target.value
        setObjeto((estadoPrevio) => ({
            ...estadoPrevio,
            nombre
        }))
        /* El orden de primero descontrullo el estado anterior, y luego mofico el valor de la propiedad o propiedades deseadas. */
    }

    /* Crear una funcion equivalente para la Contrasenia. 11.14 */
    const guardarNuevaContrasenia = (event) =>{
        let contrasenia = event.target.value
        setObjeto((estadoPrevio) => ({
            ...estadoPrevio,
            contrasenia
        })) 
    }


    return (
        <div>
            <input 
                type="text" 
                name="nombre" 
                value={objeto.nombre} 
                onChange={guardarNuevoNombre} />
            <input type="password" name="contrasenia" value={objeto.contrasenia} onChange={guardarNuevaContrasenia} />
        </div>

    )


}

function EjemploHookContador(){

    const [contador, setContador] = useState(0);
    const [contadorConEstadoPrevio, setContadorConEstadoPrevio] = useState(0);


    const estilo = {height:50, width:50, backgroundColor : "red"}
    const estilo2 = {height:50, width:50, backgroundColor : "green"}
    
    /* Es rara la situacion donde dentro de una misma funcion tengamos que modificar varias veces el valor de un mismo Hook, pero con el uso de una funcion para recibir el estado previo, lo podemos hacer. Tambien nos sirve para trabajar con objetos. */

    const contarClicks = () =>{
        setContador(contador + 1)
        setContador(contador + 1)
        setContador(contador + 1)
    }

    const contarClicksConEstadoPrevio = () =>{

        setContadorConEstadoPrevio((estadoPrevio)=> estadoPrevio + 1)
        setContadorConEstadoPrevio((estadoPrevio)=> estadoPrevio + 1)
        setContadorConEstadoPrevio((estadoPrevio)=> estadoPrevio + 1)

    }

    return (
        <div>
            <section style={estilo} onClick={contarClicks}>
                {contador}
            </section>
            <section style={estilo2} onClick={contarClicksConEstadoPrevio}>
                {contadorConEstadoPrevio}
            </section>
        </div>
    )
}

export {EjemploHookUseStateTipoObjeto, EjemploHookContador};