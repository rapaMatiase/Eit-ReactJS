import { useState } from "react";

function AgregandoComportamiento(){

    /* Esta variable, existe en el browser, pero por mas cambios que le haga, por el ciclo de carge de ReactJS, nunca va actualizar el DOM con el color rojo, por que no se entere del cmabio. */
    let variable = "VALOR INICIAL"

    //HOOK
    //const [variable, la  funcion de actualizacion] = useState("valor inicial");
    const [colorDeLaLetra, setColorDeLaLetra] = useState("");
    //Cuando yo quiera ver el valor de la variable, llamo a "colorDeLaLetra"
    //Cuando yo quiera actualizar el valor de la variable "colorDeLaLetra", utilizo la funcion setColorDeLaLetra.

    return(
        <p style={{color : colorDeLaLetra}} onClick={()=>{setColorDeLaLetra("red")}} > ¿De que color soy?</p>
    );

}

export default AgregandoComportamiento;