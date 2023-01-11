import { NavLink } from "react-router-dom";
import TarjetaItem from "../TarjetaItem";

function TarjetaItemNav({id, title, price, imagenes}){

    return(
        <NavLink to={`/detalle/${id}`} title="Producto" > 
            <TarjetaItem precio={price} titulo={title} imagenes={imagenes} />
        </NavLink>
    )
}

export default TarjetaItemNav;