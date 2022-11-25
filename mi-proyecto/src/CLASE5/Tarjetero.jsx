/* 
El componente tarjetero simplemente tiene tres componentes del tipo TarjetaDeUnaimagenv2. Uno despues de otro. 

Hacer las modiciaciones necesarias al componente TarjetaDeUnaImagenV2 para que acepte que le pasen el texto como propiedades. Solo los campos de precio, y titulo. No la imagen. 

6min 19.38

1) Crea un componenete nuevo llamado Tarjetero, que tenga un div 
2) Importa el tarjeteroDeUnaImagenV2 tal cual esta, y crea tres componentes de este dentro del div del paso anterior.
3) Modificar el tarjeteroDeUnaImagenV2 para que reciba dos porpiedades para poder cambiar el nombre del producto y el precio. 

*/
import TarjetaDeUnaImagenV2 from './TarjetaDeUnaImagenV2';

function Tarjetero(){


    return (
        <div>
            <TarjetaDeUnaImagenV2 
                imagen="https://picsum.photos/200/300/?random=1" 
                detalle="Camisa Friday II Slim Fit" 
                precio="21.000" 
            />
            
            <TarjetaDeUnaImagenV2 
                imagen="https://picsum.photos/200/300/?random=2" 
                detalle="Camisa Súper NJ Business rayada Classic fit" 
                precio="23.000" 
            />
            
            <TarjetaDeUnaImagenV2 
                imagen="https://picsum.photos/200/300/?random=3" 
                detalle="Bóxer Kevingston estampado de algodón" 
                precio="4000" 
            />
        </div>
    )
}

/* https://picsum.photos/ */

export default Tarjetero;