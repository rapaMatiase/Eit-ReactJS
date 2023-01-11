import React, { useLayoutEffect, useState } from "react";
import Axios from 'axios';
import ProductoItemFila from "../../Components/ProductoItemFila";
import ColumnaGrupo from "../../Components/ColumnaGrupo";
import { NavLink } from "react-router-dom";

function ListaDeProductos({lista, setLista}){

    const [login, setLogin] = useState(true);
    const [skip, setSkip] = useState(10);

    useLayoutEffect(()=>{
        
        Axios({
            url : `https://dummyjson.com/products?limit=10&skip=${skip}`
        })
        .then((response)=>{
            setLista(response.data.products)
            setLogin(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[login, skip]);

    return(
        <React.Fragment>
        <div className="contenedorDeTarjetas" >
                {login ? <p> Cargando</p> : lista.map((p)=>{
                    return(
                        <ColumnaGrupo>
                                <NavLink to={`/detalle/${p.id}`} title="Producto" > 
                                    <ProductoItemFila precio={p.price} titulo={p.title} imagen={p.images} id={p.id} />
                                </NavLink>                    
                        </ColumnaGrupo>
                    )
                })}
            </div>
              <button onClick={()=>{setSkip( skip >= 0 ? 0 : skip-10)}} > Anterior </button>
              <button onClick={()=>{setSkip(skip+10)}} > Siguiente </button>
            </React.Fragment>
    )
}

export default ListaDeProductos;