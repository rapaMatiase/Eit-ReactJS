import  Axios  from "axios";
import { useEffect, useState } from "react";

import './style.css';
import TarjetaItemNav from "../TajertaItemNav";
function FilaCategoria({categoria}){
    const [json, setJson] = useState([]);
    const [login, setLogin] = useState(true);

    useEffect(()=>{
        Axios({
            url : `https://dummyjson.com/products/category/${categoria}`
        })
        .then((response)=>{
            setJson(response.data.products)
            setLogin(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[login]);

    return (
        <div>
            <h3> Productos de {categoria}</h3>
            <div className="contenedorFilaCategoria" >
                {
                    login ?
                    <p> Cargando </p>
                    :
                    json.map((p, index)=>(
                        <TarjetaItemNav key={`${categoria}-${p.id}-${index}`} id={p.id} precio={p.price} titulo={p.title} imagenes={p.images} />
                    ))
                }
            </div>
        </div>
    )
}
export default FilaCategoria;