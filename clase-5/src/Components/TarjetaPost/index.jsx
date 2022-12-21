/* Crear una muy sencilla tarjeta de datos con un titulo y un cuerpo que reciba como propiedades los valores para estos dos parametos.

TARJETA DE 200Ppx por 300px

10.56
*/


function TarjetaPost({titulo, detalle}){

    const estilos = {
        height : 200,
        width : 300,
        backgroundColor: "black",
        color : "white",
        padding : 5,
        margin : 5

    }

    return (
        <div style={estilos}>
            <h4>{titulo}</h4>
            <p>{detalle}</p>
        </div>

    )

}

export default TarjetaPost;