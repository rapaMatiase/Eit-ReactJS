import { useState } from "react";




function UselocalStorageListas(nombreDelaPropiedad, valorIncial){
    
    //localStorage.getItem("NOMBRE DE LA PROPIEDAD A OBTENER");
    // Si exite un dato con ese nombre, devuelve el valor asociado.
    // Si no existe un dato con ese nombre, devuelve undefiend
    const localStorageContactos = localStorage.getItem(nombreDelaPropiedad)
    
    let listaAuxiliar;
    if(!localStorageContactos){
        //Si no esta definido, la persisto y seteo como valor incial de la aplicacion.
        localStorage.setItem(nombreDelaPropiedad, JSON.stringify(valorIncial))
        listaAuxiliar = valorIncial
        /* EN REALIDAD ESTO DEBERIA VENIR DEL BACKEND, POR AHORA LO SACAMOS DE UNA VARIABLE HARDCODEADA */
    }else{
        //Si esta definido, recupero los datos guardados de la anterior vez en el navegador.
        listaAuxiliar = JSON.parse(localStorageContactos)
    }

    const [lista, setLista] = useState(listaAuxiliar);


    const persistirEstado = () => {
        localStorage.setItem("ListaPersistida", JSON.stringify(lista))
    }

    const agregarContacto = () => {
        let copiaDelArray = [...lista]
        copiaDelArray.push({ apellido : "Todo bien"})
        setLista(copiaDelArray)
        console.log(listaAuxiliar)
        persistirEstado()
    }

    return [
        lista,
        setLista,
        agregarContacto
    ];
}

export default UselocalStorageListas;