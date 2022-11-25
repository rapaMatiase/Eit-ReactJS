
function LogoDeStream(props){

    const estilos = {
        imagen : {
            height : "7rem",
            width : "7rem",
            borderRadius : "7px"
        }
    }


    return(
            <img 
                src={props.logo} 
                style={estilos.imagen} 
                alt={props.detalle} />
    );

}

export default LogoDeStream;