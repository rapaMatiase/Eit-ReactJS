import { useState } from "react";

function UseLocalStoreNumber(nombreDeLaPropiedad, valorIncial){

    const localSotreNumero = localStorage.getItem(nombreDeLaPropiedad)

    let contadorAuxiliar;
    if(!localSotreNumero){
        localStorage.setItem(nombreDeLaPropiedad, JSON.stringify([{valor : valorIncial}]))
        contadorAuxiliar = valorIncial;
    }else{
        contadorAuxiliar = JSON.parse(localStorage.getItem(nombreDeLaPropiedad))
    }

    const [contador, setContador] = useState(contadorAuxiliar);

    const sumarUno = () => {
        setContador(contador  + 1)
        localStorage.setItem(nombreDeLaPropiedad, JSON.stringify([{valor : contador}]))
    }

    return [
        contador,
        sumarUno
    ]

}

export default UseLocalStoreNumber;