function TextoPromociones(props){

    const estilos = {
        contenedor : {
            color : "white",
            display : "flex",
            flexDirection : "column",
            justifyContent : "center",
            height : "7rem",
            paddingLeft : "1rem"
        },
        promocion : {
            margin : "0px",
            marginBotton : "1.2rem"
        },
        titulo : {
            margin : "0px",
            marginBotton : "1.2rem"
        },
        subTitulo : {
            margin : "0px",
        },
    }

    return(
        <div style={estilos.contenedor}>
            <span style={estilos.promocion}>
                {props.pruebaGratis === null ? "" : props.pruebaGratis}
            </span>
            <h2 style={estilos.titulo}> {props.descuento} </h2>
            <h4 style={estilos.subTitulo}> {props.plataforma} </h4>
        </div>
    );
}

export default TextoPromociones;