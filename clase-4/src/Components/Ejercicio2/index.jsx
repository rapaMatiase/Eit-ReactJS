import { useRef } from "react";

function Ejercicio2(){

    const inputRef = useRef()
    const liLongitudRef = useRef();
    const liNumeroRef = useRef();
    const liCaracterEspecialRef = useRef(); 

    const chequearNombre = () => {
        const nombreIngresado = inputRef.current.value
        
        if(nombreIngresado.length < 6){
            liLongitudRef.current.style.color = "red"
        }else{
            liLongitudRef.current.style.color = "green"
        }

        if(!"0123456789".includes(nombreIngresado[0])){
            liNumeroRef.current.style.color = "red"
        }else{
            liNumeroRef.current.style.color = "green"
        }

        if(!nombreIngresado.includes("*") || !nombreIngresado.includes("_") || !nombreIngresado.includes("-")){
            liCaracterEspecialRef.current.style.color = "green"
        }else{
            liCaracterEspecialRef.current.style.color = "red"
        }
    }

    return (
        <div>
            <input type="text" ref={inputRef} onChange={chequearNombre} />
            <ul>
                <li ref={liLongitudRef}> Tiene que tener 6 caracteres por lo menos</li>
                <li ref={liNumeroRef}> Tiene que comezar con un nuemro</li>
                <li ref={liCaracterEspecialRef}> Tien que tener un caracter espacial : _, - ; *</li>
            </ul>
        </div>
    )
}

export default Ejercicio2;

/* 

Controlar el nombre ingresado por el usuario;
- Tiene que tener mas de 6 caracteres.
- Comenzar con un numero.
- incluir al menos uno de estos caracteres especiales; *, -, _.

HASTA 11.20

NOTA: 
Utilizar la funcio include para determianr si tiene o no los caracteres.
*/