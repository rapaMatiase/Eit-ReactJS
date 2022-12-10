function EjemploPropiedades(props){


    return (
        <div>
            <p>
                Propidad 1 : {props.propiedad1}
            </p>
            {/* Los valores de TRUE y FALSE no se pueden imprimir directamente en la interfaz. Solo se tiene que concadenar para ver el valor en si, o convertirlo a string con toString(). */}
            <p>
                Propiedad 2 : {`${props.propiedad2}`}
            </p>
        </div>
    )
}

export default EjemploPropiedades;