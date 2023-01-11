import { useEffect, useState } from "react";
import Axios from 'axios';

function FiltradoDeProductos({lista, setLista}){


    const [loginCateogiras, setLoginCategorias] = useState(true);
    const [jsonCategorias, setJsonCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const[buscar, setBuscar]= useState(false);
    useEffect(()=>{
        Axios({
            url : 'https://dummyjson.com/products/categories'
        })
        .then((response)=>{
            setJsonCategorias(response.data)
            setLoginCategorias(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[loginCateogiras]);

    useEffect(()=>{
        if(buscar === true){
            Axios({
                url : `https://dummyjson.com/products/category/${categoriaSeleccionada}`
            })
            .then((response)=>{
                setLista(response.data.products)
                setBuscar(false)
            })
            .catch((error)=>{
                console.log(error)
            })
        }
            
    }, [categoriaSeleccionada])

    return(
        <ul>
        {jsonCategorias.map((item, index)=>(
            <li 
                onClick={(event)=>{
                    console.log(item)
                    setCategoriaSeleccionada(item)
                    setBuscar(true)
                }}
                key={`item-${index}`}
            > 
                {item} 
            </li>
        ))}
        </ul>
    )
}

export default FiltradoDeProductos;