import { useState } from 'react';
import './style.css';

/* 1) Tomo un json de ejemplo, y armo una estructura de HTML/CSS/JS para esa informacion.
2) Una vez que tengo la estructura deseada, utilizo las propiedades para recibir la informacion.
3) .... */

function PostItemInput({id, title, body}){

    const [postObjeto, setPostObjeto] = useState({
        id,
        title,
        body
    })

    const guardarTitle = (event) =>{
        /* Crear el codigo para acualizar el valor del title sin perder el resto de lso parametros del objeto. */
        let title = event.target.value 
        setPostObjeto((estadoPrevio)=>({
            ...estadoPrevio,
            title
        }))
    }

    return(
        <div 
            id={id} 
            className="postItem_contendor"
            >
                <input 
                    type="text" 
                    value={postObjeto.title} 
                    onChange={guardarTitle}
                    />
                <textarea value={postObjeto.body}></textarea>
        </div>
    )
}

export default PostItemInput;