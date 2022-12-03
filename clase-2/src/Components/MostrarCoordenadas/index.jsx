import { useState } from 'react';
import './style.css';

function MostrarCoordenadas(){

    const [xAnterior, setXAnterior] = useState(null);
    const [yAnterior, setYAnterior] = useState(null);
    const [direccion, setDireccion] = useState(null);

    const mouseEnMovimiento = (event) =>{
        let xNueva = event.clientX
        let yNueva = event.clientY

        if(xNueva < xAnterior){
            setDireccion("Izquierda")
        }else if(xNueva > xAnterior){
            setDireccion("Derecha")
        }

        setXAnterior(xNueva)
        setYAnterior(yNueva)
    }

    return(
        <div className="coordendas" onMouseMove={mouseEnMovimiento} >
            {`(x:${xAnterior} - y:${yAnterior}) \n ${direccion} `}
        </div>
    )
}

export default MostrarCoordenadas;