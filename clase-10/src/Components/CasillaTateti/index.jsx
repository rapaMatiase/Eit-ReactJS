import { useState } from 'react';
import './style.css';

function CasillaTateti({x, y, funcionDeActualizacionEnviada, habilitado}){

    const [miValor, setMiValor] = useState(null);
    
    const hizoClick = () => {
        if(habilitado(x, y)){
            let resultado = funcionDeActualizacionEnviada(x,y)
            setMiValor(resultado)
        }
    }

    return (
        <div 
            className='contenedor' 
            onClick={hizoClick}
            >
            {miValor}
        </div>
    )
}

export default CasillaTateti;