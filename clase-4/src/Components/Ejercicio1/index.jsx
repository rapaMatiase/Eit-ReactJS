import { useRef } from "react";


function Ejercicio1(){

    const inputPasswordRef = useRef();

    const liLongitudRef = useRef();
    const liFinalizaConNumeroRef = useRef();
    const liMayusculaRef = useRef();

    const chequearCondiciones = () =>{
        let passowordIngresada = inputPasswordRef.current.value;
        let longitud = passowordIngresada.length
        
        if(longitud  < 8 || longitud  > 12){
            liLongitudRef.current.style.color = "red"
        }else{
            liLongitudRef.current.style.color = "green"
        }

        if(!"1234567890".includes(passowordIngresada[longitud-1])){
            liFinalizaConNumeroRef.current.style.color = "red"
        }else{
            liFinalizaConNumeroRef.current.style.color = "green"
        }

        if(passowordIngresada[0] !== passowordIngresada[0].toUpperCase() ){
            liMayusculaRef.current.style.color = "red"
        }else{
            liMayusculaRef.current.style.color = "green"
        }
    }

    return(
        <div>
            <input 
                ref={inputPasswordRef} 
                onChange={chequearCondiciones}
                type="password" />
                <ul>
                    <li ref={liLongitudRef}> Tiene que tener entre 8 y 12 caracteres</li>
                    <li ref={liFinalizaConNumeroRef} > Tiene que finalizar con un numero</li>
                    <li ref={liMayusculaRef}> Tiene que comenzar con una mayuscula</li>
                </ul>
        </div>
    )
}

export default Ejercicio1;

/* 
Crear un compoenente que devuelva un input del tipo password y controlo que lo ingresado por el usaurio cumpla con;
- Tener entre 8 y 12 caracteres de longitud.
- terminar en con un numero.
- Comenzar con una maysucula.

PISTA: 
password[0] === password[0].uppercase()

Que el control pase cada vez qeu el usuario hace un cambio (onChange). 9 10.47
*/