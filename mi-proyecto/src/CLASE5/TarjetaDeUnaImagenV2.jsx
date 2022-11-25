import imagen from './img/trees-g48ecac7f2_1920.jpg';

const estilos ={
    contenedor : {
        display : "flex",
        flexDirection : "column",
        maxWidth : "300px"
    },
    imagen : {
        height : "200px",
        marginBottom : "10px"
    },
    alerta : {
        backgroundColor : "#A00E1D",
        color : "white",
        textAlign : "center",
        marginBottom : "10px"
    },
    titulo : {
        fontSize : "1.5em"
    },
    subTitulo : {
        color : "#D7D7D7",
        fontSize : "1em"
    },
    precio : {
        fontSize: "1.5em",
        fontWeight : "bold",
    }
}

/* 
let props = {
    detalle : "Boxer",
    precio : "5000",
}
*/

function TarjetaDeUnaImagen(props){

    return (
        <div style={estilos.contenedor}>

            <img src={props.imagen} style={estilos.imagen} alt="Imagen de prueba" />
            <div>
                <span style={estilos.alerta}>NUEVO!</span>
            </div>
            
            <span style={estilos.titulo}> {props.detalle}</span>

            <span style={estilos.subTitulo}>3 coutas sin intereses de $7.000</span>
            
            <span style={estilos.precio}>${props.precio}</span>
        </div>

    );

}

export default TarjetaDeUnaImagen;