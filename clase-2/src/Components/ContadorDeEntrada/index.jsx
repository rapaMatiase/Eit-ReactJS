import { useState } from 'react';
import './style.css';

function ContadorDeEntrada(){

    const [contador, setContador] = useState(0);


    const mouseEntro = () =>{
        //setContador(NuevoEstado = estadoAnterior + modificacion)
        setContador(contador + 1)
    }

    return(
        <div>
            CONTANDO ENTRADAS
            <div id="contador" onMouseEnter={mouseEntro} > {contador} </div>
        </div>
    )
}

export default ContadorDeEntrada;