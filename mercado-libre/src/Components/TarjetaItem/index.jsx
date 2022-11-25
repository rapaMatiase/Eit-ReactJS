import { useState } from 'react';
import './style.css';

function TarjetaItem(){

    return (
        <div className='tarjetaItem tarjetaItem-show' >
            <div className='tarjetaItem-fila'>
                <img 
                    className='tarjetaItem-imagen'
                    src="https://picsum.photos/seed/picsum/224/224" 
                    alt="Imagen producto" />
            </div>
            <div style={{padding : "20px 10px 20px 16px", boxSizing : "border-box"}}>

                <div className='tarjetaItem-fila'>
                    
                    <span  className=' tarjetaItem-oculto tarjetaItem-promociones tarjetaItem-promociones_tachado'>Antes: 169999 pesos</span>
                    <h1 style={{marginBottom : "5px"}} className='tarjetaItem-precio'> 
                        $142.999 
                        <span className='tarjetaItem-promociones'>16% OFF</span>
                    </h1>
                    <span className='tarjetaItem-promociones'>12x $11.874 sin interes</span>
                    <span className='tarjetaItem-promociones tarjetaItem-promociones_negrita'> Envio gratis </span>    
                    <span style={{marginTop : "10px"}} className='tarjetaItem-promociones tarjetaItem-promociones_colorGainsboro'>Smart TV Samsung Series 7 UN55AU7000GCZB LED 4K 55" 220V - 240V</span>
                </div>
            </div>
            
            
        </div>
    );
}

export default TarjetaItem;