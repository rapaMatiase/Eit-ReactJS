import React from "react";

const estilo = {
    backgroundColor : "red", 
    color : "white",
    fontSize : "80px"
}

function TituloH1ConMuchosEstilos(){

    return (
        <React.Fragment>
            <h1 style={estilo}> Hola, como estas?</h1>
            <h3> Sub tituto </h3>
        </React.Fragment>
    );
}

export default TituloH1ConMuchosEstilos;