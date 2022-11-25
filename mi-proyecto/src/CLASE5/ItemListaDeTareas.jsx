/* TODOS LOS COMPONENTES DE REACT RECIBEN UN PARAMETRO LLAMADO PROPS, QUE ES UN OBJETO LITERAL DE JAVASCRIPT Y ADENTRO TRAE TODOS LOS VALORES DE LOS ATRIBUTOS QUE TIENE EL COMPONENTE EN LA INVOCACION.
let props = {
    textoTarea : "valor que escribi donde lo invoque"
} 

*/

import { useState } from "react";

function ItemListaDeTareas(props){

    const [estado, setEstado] = useState(false);

    const cambiarEstadoDeTrea = () =>{
        setEstado(!estado)
    }

    return(
    
        <li onClick={cambiarEstadoDeTrea}> 
            { 
            estado ?
            <span style={{textDecoration : "solid 1px black line-through" }} >{props.textoTarea}</span>
            :
            <span>{props.textoTarea}</span>
            }
        </li>
    )
}

export default ItemListaDeTareas;