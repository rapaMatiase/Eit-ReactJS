/* Crear un componente que reutilizando el compoenenete scrollHorizontal y comentarioItem, haga la conexion a dummpyjson y traiga todos los comentarios y los muestre. 11.46*/

import ScrollHorizontal from "../ScrollHorizontal";
import ComentarioItem from "../ComentarioItem";
import { useEffect, useState } from "react";
import Axios from "axios";

function ScrollComentarios({idSeleccionado}){

    const [json, setJson] = useState({});
    const [cargando, setCargadno] = useState(true);
    const [jsonFiltrado, setJsonFiltrado] = useState([]);    
    /* Refactorizar para que si no tiene ningun comentario el post correspondiente  al idSeleccioando, que muestre un mensaje diciendo; "sin comentarios". 12.40 */

    useEffect(()=>{
        Axios({url : "https://dummyjson.com/comments"})
        .then((response)=>{
            setJson(response.data.comments)
            setCargadno(false);
        })
        .catch((error)=>{
            console.log(error)
        })
    }, [cargando])

    useEffect(()=>{
        filtrarPorIdUsuario()
    }, [idSeleccionado])

    const filtrarPorIdUsuario = () => {
        const arrayCopia = json || []
       /*  setJsonFiltrado(arrayCopia.filter((comentario)=>{
            return comentario.postId === idSeleccionado
        })) */
    }

    return (
        <ScrollHorizontal>
            
            {
            cargando 
            ? 
            <p>Cargando espere</p> 
            : 
                jsonFiltrado.length === 0 ? <p> Sin cometearios</p> : 
               jsonFiltrado.map((comentario)=>(<ComentarioItem comentarioData={comentario} />))
            }
        </ScrollHorizontal>
    );
}

export default ScrollComentarios;