import './style.css';
function Ejercicio2A(props){

    /* Modifcar el componenete, para que los valores hardcodeados del texto, el id, y la imagen sean recibidos como propiedades del componenete. 12.40 */

    return (
        <article className='contenedor'>
            <section className='fila75'>
                <img src={props.url} alt="" />
            </section>
            <section className='fila25'>
                <span> {props.title} </span>
                <span className='id'> #{props.id} </span>
            </section>
        </article>
    )
}

function Ejercicio2B({url, title, id}){

    /* Muchas veces cuando tengo un componente que no maneaja estado interno (No tiene hook de useStete) y recibe muchas propiedades para visulaizar datos en pantalla. */

    return (
        <article className='contenedor'>
            <section className='fila75'>
                <img src={url} alt="" />
            </section>
            <section className='fila25'>
                <span> {title} </span>
                <span className='id'> #{id} </span>
            </section>
        </article>
    )
}

export {Ejercicio2A, Ejercicio2B};