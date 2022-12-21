import './style.css';

function Ejercicio1(props){


    return (
        <article className='itemTarjeta'>
            <section className='itemTarjeta_contendorImagen'>
                <img className='itemTarjeta_imagen' src={props.url} alt={props.detail} />
            </section>
            <section className='itemTarjeta_detalle'>
                <span> {props.author} </span>
                <span className='itemTarjeta_id'> #{props.id} </span>
            </section>
        </article>
    )
}

export default Ejercicio1;