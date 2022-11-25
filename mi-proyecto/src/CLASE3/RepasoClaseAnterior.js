
//RECORDAMOS QUE LOS NOMBRES DE LOS COMPONENETES TIENE QUE COMENZAR EN MAYUSCULA
//NO OLVIDAR EXPORT DEFAULT AL FINAL DE LA PAGINA.

const estilos = {
    backgroundColor : "red",
    color : "blue"
}

function ComponenteRepasoClaseAnterior(){

    return (
        <div style={estilos} >
            <h1> Titulo </h1>
            <p> Hola, como va? </p>
        </div>
    );
}

export default ComponenteRepasoClaseAnterior;