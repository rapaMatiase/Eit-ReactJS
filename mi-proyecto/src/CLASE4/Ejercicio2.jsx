/* 
Crear un input del tipo password (EN el atributo type ponen password), y guardar en un hook, la contraseña ingresada por el usuario. Imprimir en pantalla la misma.

4min 18.36

*/

import { useState } from "react";
 /* Controlar que la password tiene entre 3 y 5 caracteres, y que inicia con mayuscula.
    
    Sacan el primer caracter de la hook, y lo guardan en una variable auxiliar, le aplican la porpiedad upper pa convertirlo en mayuscula. Si el resultado en esa variable auxiliar, es igual al primer caracter de hook, significa que es mayusucla. 

    4min, 19. 43
    
    */
function Clase4Ejercicio1(){

    const [passowrdIngresada, setPasswordIngresada] = useState("vacio");
    const [longitudRequerida, setLongitudRequerida] = useState(false);
    const [noTieneMayuscula, setNoTieneMayuscula] = useState(false);

        const guardarPassword = (e) =>{
        let passwordDelInput = e.target.value
        setPasswordIngresada(passwordDelInput)
        tieneEntre3y5Caracteres()
        comienzaConMayuscula()
    }
    
    const tieneEntre3y5Caracteres = () =>{
        if(passowrdIngresada.length < 3 || 5 < passowrdIngresada.length ){
            setLongitudRequerida(false);
        }else{
            setLongitudRequerida(true);
        }
    }

    const comienzaConMayuscula = () => {
        let primeraLetra = passowrdIngresada[0]
        if(primeraLetra.toUpperCase() === passowrdIngresada[0]){
            setNoTieneMayuscula(true);
        }else{
            setNoTieneMayuscula(false);
        }
    }

    return (
        <div>
            <input  type="password" value={passowrdIngresada} onChange={(e)=>{guardarPassword(e)}} />
            <label> {longitudRequerida ? "" : "Tiene que tener entre 3 y 5 caracteres"} </label>
            <label> {noTieneMayuscula ? "" : "Tiene que comenzar con mayuscula"} </label>
            {`${passowrdIngresada}`}
        </div>
    );
}

export default Clase4Ejercicio1;