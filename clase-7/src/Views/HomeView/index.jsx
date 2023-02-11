/* Creara una vista que haga la conexion a dummpy json y traiga todos los post, y cree una instancia de postItem para cada uno. 

Hacer el refactor del componenete para que reciba los datos como propiedades en vez de tener una variable hardcodeada. 

10. 51*/

import Axios from 'axios';
import { useEffect, useState } from 'react';
import PostItem from '../../Components/PostItem';
import ScrollHorizontal from '../../Components/ScrollHorizontal';
import ScrollComentarios from '../../Components/ScrollComentarios';

/* 

1) Crear un hook useState en HomeView para guardar el valor del post seleccionado por el usuario para ver los comentarios.

2) pasar el set del useState como propiedad a postItem. 12.30

3) Ir a post item y modificarlo para que tenga un boton que al hacer click, setea el valor del id del post. 

*/

function HomeView(){

    const [json, setJson] = useState({});
    const [cargando, setCargando] = useState(true);
    const [idPostSeleccionado, setIdPostSeleccionado] = useState(0);
    const [skip, setSkip] = useState(5);

    /* Modificar el pedido de post para que recibir como maximo 10 post y agregar los botones para poder moverse de 10 hacia adelante o atras en los post. Utilizar el skip and limit de api. 12.53 */
    useEffect(()=>{
        Axios({url : `https://dummyjson.com/posts?skip=${skip}&limit=10`})
        .then((response)=>{
            console.log(response.data.posts)
            setJson(response.data.posts)
            
            setCargando(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[cargando, skip])

    

    return (
        <div style={{display: "flex", }}>
            {
                cargando 
                ?
                    <p>Cargando, espere, por favor ...</p>
                :
                <ScrollHorizontal>
                    {json.map((post)=>(
                        <PostItem postData={post} setIdPostSeleccionado={setIdPostSeleccionado}/>
                    ))}
                </ScrollHorizontal>
            }

            <ScrollComentarios idSeleccionado={idPostSeleccionado} />
            <button onClick={()=>{setSkip(skip - 5)}}> Ant </button>
            <button onClick={()=>{setSkip(skip + 5)}}> Sig </button>
        </div>
    )
}

export default HomeView;