import { useEffect, useState } from "react";
import Axios from 'axios';


function PerfilDeUsuario(){

    const [json, setJson] = useState();

    const [isLoging, setIsLogin] = useState(true)

    const [contador, setContador] = useState(0);

    useEffect(() => {
        /* El setTimeout no tiene nada que ver con el obtener peticiones, simplemente lo utilizamos para finjir que la misma tarde unos momentos y aprender como mostrar un cargando al usuario en pantalla. */
        setTimeout(() => {
            Axios({
                url : "https://jsonplaceholder.typicode.com/users/2"
            })
            .then((response)=>{
                setJson(response.data)
                setIsLogin(false)
            })
            .catch((error)=>{
                console.error(error)
            })
        }, 5000)

        console.log("DidMount")
    },[isLoging])

    return (
        <div>
            <button onClick={()=>{setContador(contador + 1)}}> CLICK ME : {contador}</button>
            {
                isLoging ? 
                <p> Esta cargando ...</p>
                :
                <p>
                    nombre : {json.name}
                    apellido : {json.username}
                </p>
            }
        </div>
    )
}

export default PerfilDeUsuario;