import { useEffect, useState } from "react";
import TarjetaPost from "../TarjetaPost"
import  Axios  from "axios";

function TarjeteroDePost(){

    const [json, setJson] = useState([]);
    const [cargando, setCargando] = useState(true);
    /* ACA VAMOS A HACER UNA CONECCION A API */
    useEffect(()=>{
        //Utilizamos el setTimeout para fingir que la conexion a internet es lenta
        setTimeout(()=>{
            Axios({
                url : "https://jsonplaceholder.typicode.com/posts",
            })
            .then((response)=>{
                setJson(response.data)
                setCargando(false)
            })
            .catch((error)=>{
                console.log(error)
            })
        }, 5000)
            
    }, [cargando]);


    return(
        <div style={{display: "flex", flexWrap: "wrap", width: 700}} >
            <button onClick={()=>{setCargando(true)}} > Actualizar</button>
            {
                cargando ?
                <p>Cargando... espere</p>
                :
                json.map((item)=>  <TarjetaPost titulo={item.title} detalle={item.body} /> ) 
            }
        </div>
    )
}

export default TarjeteroDePost;