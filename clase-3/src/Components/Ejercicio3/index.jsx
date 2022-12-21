

import { useState } from "react";

const ItemLista  = ({id, index,  detalle, estado, marcarItemComoCompletado}) =>{

    const marcarComoTerminado = () =>{
        marcarItemComoCompletado(index)
    }
    
    return (
        <li onClick={marcarComoTerminado} style={{color : estado ? "gray" : "black"}}>
            {detalle}
        </li>
    )
}

function ListaDeTareas(){

    const [array, setArray] = useState([
        {id : "1", detalle : "Hacer Compras", estado : false},
        {id : "2", detalle : "Tirar basura", estado : false},
        {id : "3", detalle : "Preparar comida", estado : false},
        {id : "4", detalle : "Sacaar al perro", estado : false},
    ])


    const marcarItemComoCompletado = (id) =>{
        for(let i = 0 ; i < array.length ; i++){
            let item = array[i]
            if(item.id === id){
                item.estado = true
                let arrayFiltrado = array.filter((item)=> item.id !== id)
                arrayFiltrado.push(item)
                setArray(arrayFiltrado)
                console.log(item)
            }
        }
    }

    return(
        <div>
            <ul>
                {array.map((item, index)=>(
                    <ItemLista 
                        id={item.id} 
                        index={index}
                        detalle={item.detalle} 
                        estado={item.estado} 
                        marcarItemComoCompletado={marcarItemComoCompletado} />
                ))}
            </ul>
        </div>
    )
}

export default ListaDeTareas;