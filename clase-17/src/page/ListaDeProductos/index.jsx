import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";
import Axios from 'axios';
import TarjetaItem from "../../Components/TarjetaItem";
import './style.css';

function ListaDeProductos(){

    const [json, setJson] = useState([]);
    const [login, setLogin] = useState(true);
    const [skip, setSkip] = useState(10);

    useEffect(()=>{
        Axios({
            url : `https://dummyjson.com/products?limit=10&skip=${skip}`
        })
        .then((response)=>{
            setJson(response.data.products)
            setLogin(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[login, skip]);

    return(
        <div>
            <h1> Lista de productos </h1>
            <div className="contenedorDeTarjetas" >
                {login ? <p> Cargando</p> : json.map((p)=>{
                    return(
                        <div className="celda">
                                <NavLink to={`/detalle/${p.id}`} title="Producto" > 
                                    <TarjetaItem precio={p.price} titulo={p.title} imagenes={p.images} />
                                </NavLink>                    
                        </div>
                    )
                })}
            </div>
            <button onClick={()=>{setSkip( skip >= 0 ? 0 : skip-10)}} > Anterior </button>
            <button onClick={()=>{setSkip(skip+10)}} > Siguiente </button>

        </div>
    )
}

export default ListaDeProductos;