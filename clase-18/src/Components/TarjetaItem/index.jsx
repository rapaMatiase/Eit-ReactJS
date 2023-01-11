
import './style.css';

function TarjetaItem({precio, titulo, imagenes}){


    const calcularCuotas = () =>{
        return (precio / 12).toString().substring(0,5)
    }

    return (
        <div className='tarjetaItem tarjetaItem-show' >
            <div className='tarjetaItem-fila'>
                <img 
                    className='tarjetaItem-imagen'
                    src={imagenes[0]} 
                    alt="Imagen producto" />
            </div>
            <div style={{padding : "20px 10px 20px 16px", boxSizing : "border-box"}}>

                <div className='tarjetaItem-fila'>
                    
                    <span  className=' tarjetaItem-oculto tarjetaItem-promociones tarjetaItem-promociones_tachado'>Antes: 169999 pesos</span>
                    <h1 style={{marginBottom : "5px"}} className='tarjetaItem-precio'> 
                        ${precio}
                        <span className='tarjetaItem-promociones'>16% OFF</span>
                    </h1>
                    <span className='tarjetaItem-promociones'>12x ${calcularCuotas()} sin interes</span>
                    <span className='tarjetaItem-promociones tarjetaItem-promociones_negrita'> Envio gratis </span>    
                    <span style={{marginTop : "10px"}} className='tarjetaItem-promociones tarjetaItem-promociones_colorGainsboro'> {titulo} </span>
                </div>
            </div>
            
            
        </div>
    );
}

export default TarjetaItem;