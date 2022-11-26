import React from "react";
import Contador from "../../Components/Contador";
import BotonCuadrado from "../../Components/BotonCuadrado";
import BotonRectangular from "../../Components/Boton";
/* Los nombres de los componenetes simpre utilizan Mayuscula!! */
function Home(){
    return(
        <React.Fragment>
             {/* <Contador /> */}
            <BotonCuadrado />
            <BotonRectangular />
        </React.Fragment>
    )
}

export default Home;