import './style.css';
function ProductoItemFila({imagen, titulo, id, precio, }){


    return(
        <article className="productoItenFila_contendor" key={id} >
            <section className="productoItenFila_columna20">
                <img className='productoItenFila_imagen' src={imagen[0]} alt={`La imagen de ${titulo}`} />
            </section>
            <section className="productoItenFila_columna80">
                <h3>{titulo}</h3>
                <h1>{precio}</h1>
            </section>
        </article>
    )
}

export default ProductoItemFila;