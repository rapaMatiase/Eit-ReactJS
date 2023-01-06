import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";
// const id = 2
function DetalleDeProducto(){
    const {id} = useParams();
    const [json, setJson] = useState([]);
    const [login, setLogin] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        Axios({
            url : `https://dummyjson.com/products/${id}`
        })
        .then((response)=>{
            setJson(response.data)
            setLogin(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[login]);
    

    const volverPaginaAnterior = () =>{
        // navigate('/lista');
        navigate(-1);
    
    }

    return(
        <React.Fragment>
                <button onClick={volverPaginaAnterior} > Volver </button>
                <Link to='/lista'> volver </Link>
                {
                login ? 
                <p> Cargando </p>
                :
                <div>
                    <h1> DetalleDeProducto del producto {json.title} </h1>
                    <p> {json.description} </p>
                    <h1> ${json.price} </h1>
                    {json.images.map((i, index)=>{
                        return (<img src={i} alt={`img-${index}`} style={{height:60}} />)
                    })}
                </div>
                }
        </React.Fragment>
    )
}

export default DetalleDeProducto;