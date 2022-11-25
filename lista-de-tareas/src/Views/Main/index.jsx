import { useState } from "react";
import Contenedor from "../../Components/Contenedor";
import ItemTarjeta from "../../Components/ItemTarjeta";

const json = [
    {id : "1", titulo : "Hacer compras", detalle : "Comprar pan, papafritas, coocacola"},
    {id : "2", titulo : "Scar turno medico", detalle : "LLamar a jorge el clinico"},
    {id : "3", titulo : "Ropa sucia", detalle : "Buscar pantalon de tintoreria"},
]

function MainView(){

    const [listaDeTareas, setListaDeTareas] = useState(json);

    const borrarTarjete = (id) =>{
        let listaFiltrada = listaDeTareas.filter((item)=>{
            return id !== item.id
        })
        setListaDeTareas(listaFiltrada)
    }

    return (
        <div>
            <Contenedor direccion="row" wrap="wrap">
                {listaDeTareas.map((item)=>(
                    <ItemTarjeta
                        key={`itemTarjeta-${item.id}`}
                        titulo={item.titulo}
                        detalle={item.detalle}
                        id={item.id}
                        funcionParaBorrar={borrarTarjete}
                    />
                ))}
            </Contenedor>
                
        </div>
    )
}

export default MainView;