import { useState } from 'react';
import './style.css';
function Ejercicio1(){

    /* Crear un HOOK del tipo Objeto, que tengo dos atributos (uno para el nombre de usuario y otro para la password). Crear las funciones necesarias para que cuendo el usaurio este ingresando los datos en cada input, se actualiza el estado del hook (utilizar el evento onChange). 
    Al hacer click en el boton de inicio de sesion, mostrar los valores por consola o alert.
    7min 11.28
    */

    const [usuario, setUsuario] = useState({username : null, password : null});

    const guardarNombreDeUsuarioIngresado = (event) =>{
        let username = event.target.value
        setUsuario((estadoPrevio)=>({
            ...estadoPrevio,
            username
        }))
    }

    const guardarPassowrdDeUsuarioIngresada = (event) =>{
        let password = event.target.value
        setUsuario((estadoPrevio) => ({
            ...estadoPrevio,
            password
        }))
    }

    const mostratValor = () =>{
        console.log(usuario.username, usuario.password)
    }

    return (
        <div className='contendor'>
            <h4>Iniciar sesion en Facebook</h4>
            <input 
                type="text" name="username" placeholder="Correo electronico o numero de telefono"
                onChange={guardarNombreDeUsuarioIngresado}
                />
            <input 
                onChange={guardarPassowrdDeUsuarioIngresada}
                type="password" name="password" placeholder="Contraseña" />
            <button onClick={mostratValor} > Iniciar sesion</button>
            <a href=""> ¿Has olvidado los datos de la cuenta?</a> 
            <a href="">Registrarte en Fabook</a>
        </div>
    )
}

export default Ejercicio1;