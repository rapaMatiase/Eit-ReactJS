import { useState } from "react";
import './style.css';
import Paper from "../Paper";
import Contenedor from "../Contenedor";

function ItemTarjeta(props){

    const [titulo, setTitulo]=useState(props.titulo);
    const [editable, setEditable] = useState(false); //FALSE = NO ES EDITABLE

    const actualizarTitulo = (event) => {
        // El parametro EVENT hace referencia al OBJETO EVENT que siempre se recibe con cualquier evento de js que ocurra.
        //El EVENTE.TARGET hace referenecia a obtener el elemento de la interfaz donde ocurrio el evento.
        let elInputTextTitle = event.target
        //El EL.VALUE es para obtener el valor ingresado por el usuario en el input
        let tituloIngresado = elInputTextTitle.value
        //Por ultimo actualizo el HOOK del Titulo
        setTitulo(tituloIngresado)
    }

    return (      
        <Paper color="pink"> 
            <Contenedor direccion="column">
                <input 
                    type="text"  
                    value={titulo} 
                    onChange={actualizarTitulo}
                    readOnly={editable === false}
                    className={editable === true ? "editable" : "no-editable"}
                    />
                <textarea 
                    className={editable === true ? "editable" : "no-editable"}
                    readOnly={editable === false}
                    defaultValue={props.detalle}
                > 
                     
                </textarea>
                <Contenedor direccion="row">
                    {
                        editable === false ?
                            <button onClick={()=>(setEditable(true))}> Editar</button>  
                        :
                            <button onClick={()=>(setEditable(false))}> Guardar</button>
                    }
                            <button onClick={()=>(props.funcionParaBorrar(props.id))}> Borrar</button>
                </Contenedor>
            </Contenedor>
        </Paper> 
    );

}


/* 
  <input 
                type="text"  
                value={titulo} 
                onChange={actualizarTitulo}
                readOnly={editable === false}
                className={editable === true ? "editable" : "no-editable"}
                />
            <textarea 
                className={editable === true ? "editable" : "no-editable"}
                readOnly={editable === false}
            > 
                {props.detalle} 
            </textarea>
            {
                editable === false ?
                    <button onClick={()=>(setEditable(true))}> Editar</button>  
                :
                    <button onClick={()=>(setEditable(false))}> Guardar</button>
            }

*/
export default ItemTarjeta;