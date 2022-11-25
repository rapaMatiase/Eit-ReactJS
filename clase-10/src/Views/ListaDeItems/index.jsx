import { useState } from "react";
import Item from "../../Components/Item";

function ListaDeItems(){

    const [listaDeItemsSeleccioandos, setListaDeItemsSeleccionados] = useState([])

    const seleccionDeItem = (id) => {
        if(listaDeItemsSeleccioandos.some((item)=>(item === id))){
            /* Si ya seleccionado, lo elimino. */
            let copyArray = listaDeItemsSeleccioandos
            copyArray = copyArray.filter((item)=>(item !== id))
            setListaDeItemsSeleccionados(copyArray)
        }else{
            /* Si no seleccionado, lo agrego. */
            setListaDeItemsSeleccionados([...listaDeItemsSeleccioandos , id])
        }
    }

    return (
        <div>
            {`Cantidad de items seleccionados : ${listaDeItemsSeleccioandos.length}`}
            <Item id={1}  valor={"Hacer copras"}   notificarQueFuiSeleccionado={seleccionDeItem} />
            <Item id={2}  valor={"Sacar al perro"} notificarQueFuiSeleccionado={seleccionDeItem} />
            <Item id={3}  valor={"Bañarme"}        notificarQueFuiSeleccionado={seleccionDeItem} />

        </div>
    )
}

export default ListaDeItems;