
function Contenedor(props){

    const estilo = {
        display : "flex",
        flexDirection : props.direccion,
        justifyContent : "space-between",
        alignItems : "center",
        height : "100%",
        flexWrap : props.wrap
    }
    return (

        <div style={estilo}>
            {props.children}
        </div>
    )
}

export default Contenedor;