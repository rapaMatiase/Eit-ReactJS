import { useState } from "react";

function Item({id, valor, notificarQueFuiSeleccionado}){

    const[select, setSelect] = useState(false)
    
    const funcionOnClick = () => {
        notificarQueFuiSeleccionado(id)
        setSelect(!select)
    }

    const estilo = {
        border : select ? "1px solid black" : "none"
    }
    return (
        <div 
            style={estilo} 
            onClick={funcionOnClick} > 
                {valor} 
            </div>
    );
}

export default Item;