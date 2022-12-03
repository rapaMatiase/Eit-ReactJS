import './style.css';

function TarjetaProductoItem(){

    return (
        <article className='tarjetaProducto_contendor'>
            <section className='tarjetaProducto_fila'>
                <img src="https://picsum.photos/224/224?random=1" alt="" />
            </section>
            {/* Lo hecho en el className de abajo es una mala practica, solo lo hicimos por hoy para que sea mas facil ver los nombres de las clases. */}
            <div className='tarjetaProducto_lineaHorizontal'></div>
            <section 
                className={`tarjetaProducto_fila 
                            tarjetaProducto_fila-column 
                            tarjetaProducto_fila-izquierda
                            tarjetaProducto_fila-padding`}
            >
                <span className='tarjetaProducto_textoSecundario tarjetaProducto_textoSecundario-tachado tarjetaProducto_textoSecundario-s14'> $139.999</span>
                <p className='tarjetaProducto_precioNuevo' >
                    $ 120.499 
                    <span className='tarjetaProducto_descuento'>13% OFF</span> 
                </p>
                <span className='tarjetaProducto_descuento'>6x $20.083 sin interes</span>
                <span className='tarjetaProducto_descuento tarjetaProducto_descuento-negrita'> Envio gratis 💡 FULL</span>
                <span class="tarjetaProducto_textoSecundario"> Smart TV Samsung Series 7 UN50AU7000GCZB LED 4K 50"</span>
            </section>
        </article>
    )
}

export default TarjetaProductoItem;