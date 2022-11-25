import { useState } from "react";
import TareaTarjetaItem from "../Components/TareaTarjetaItem";
import Contenedor from "../Components/Contenedor";
import PanelNuevoItems from "../Components/PanelNuevoItems";
const json = [
    {id : "1", texto: "Compras"},
    {id : "2", texto: "Compras"},
    {id : "3", texto: "Compras"},
    {id : "4", texto: "Compras"},
    {id : "5", texto: "Compras"},

]

let idMax = 6

function MainView(){
    const [idItemParaBorrar, setIdItemParaBorrar] = useState(null);
    const [lista, setLista] = useState(json);

    const borrarItem = (id) =>{
        let listaFiltrada = lista.filter(item => {return item.id !== id})
        setLista(listaFiltrada)
        console.log(id)
    }

    const agregarItem = (nuevoItem) => {
        setLista([...lista, {id: idMax, texto: nuevoItem}])
        idMax++
    }

    return (
        <main>
            <Contenedor direction="column" image={"https://picsum.photos/"}>
                <Contenedor direction="column">
                    <PanelNuevoItems funcion={agregarItem} />
                </Contenedor>
                <Contenedor direction="column">
                    {lista.map((item)=>(
                            <TareaTarjetaItem 
                                key={`item-${item.id}`}
                                texto={item.texto}
                                id={item.id}
                                borrar={borrarItem}
                            />
                    ))}

                </Contenedor>
           </Contenedor>
        </main>
    );
}

export default MainView;