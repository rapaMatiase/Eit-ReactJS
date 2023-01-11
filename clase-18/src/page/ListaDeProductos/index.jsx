import { useEffect, useState } from "react";
import Axios from 'axios';
import TarjetaItem from "../../Components/TarjetaItem";
import './style.css';
import ListaDeProductos from "../../Components/ListaDeProductos";
import FiltradoDeProductos from "../../Components/FiltradoDeProductos";

function ListaDeProductosView(){

    const [listado, setListado] = useState([]);

    return(
        <div style={{display : "flex", alignItems: "center", paddingTop : 50}}>
            <h1> Lista de productos </h1>
        
            <FiltradoDeProductos 
                lista={listado}
                setLista={setListado}
            />
            <ListaDeProductos
                lista={listado}
                setLista={setListado}
            />

        </div>
    )
}

export default ListaDeProductosView;