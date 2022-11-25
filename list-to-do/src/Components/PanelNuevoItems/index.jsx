import { useState } from "react";

function PanelNuevoItems(props){

    const [texto, setTexto] = useState("");
    const onChange = (e) => {
        let textoIngresado = e.target.value
        setTexto(textoIngresado)
    }

    return (
        <div>
            <input type="text" onChange={onChange} value={texto} />
            <button onClick={()=> {props.funcion(texto)}} > Agregar </button>
        </div>
    );

}

export default PanelNuevoItems;