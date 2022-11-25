import { useState } from "react";
import './style.css';

function TareaTarjetaItem(props){

    const [editable, setEditable] = useState(false);
    const [valor, setValor] = useState(props.texto)
    
    const onChange = (event) => {
        let el = event.target
        setValor(el.value)
    }
    
    return (
        <div className="contenedor">
            <div className="paper">

                <input
                    className={editable ? "editable" : "noEditable"} 
                    type="text" 
                    value={valor}
                    onChange={onChange}
                    readOnly={editable === false}
                    />
                <div>
                    {
                        editable ? 
                        <button onClick={()=>{setEditable(false)}}> Guardar</button>
                        :
                        <button onClick={()=>{setEditable(true)}}> Editar</button>
                    }
                    <button onClick={()=>{props.borrar(props.id)}}> Delete</button>
                </div>
            </div>
        </div>
    );
}

export default TareaTarjetaItem;