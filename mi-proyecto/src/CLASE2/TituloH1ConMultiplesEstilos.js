import React from "react";

const estiloH1 = {
    backgroundColor : "red", 
    color : "white",
    fontSize : "80px"
}

const estiloH3 = {
    backgroundColor : "pink",
    fontSize : "50px"
}

function TituloH1ConMultiplesEstilos(){

    return (
        <React.Fragment>
            <h1 style={estiloH1}> Hola, como estas?</h1>
            <h3 style={estiloH3}> Sub tituto </h3>
        </React.Fragment>
    );
}

export default TituloH1ConMultiplesEstilos;