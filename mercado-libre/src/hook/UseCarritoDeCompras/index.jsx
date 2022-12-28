import { useState } from "react";

/* NOS OLVIDAMOS UN RATO DEL LOCAL STORAGE */
function UseCarritoDeCompras(){

    const [carrito, setCarrito] = useState([]);

    
    const agregarItem = (item) => {
        /* Parte 1 - Agregar el item.  */
        setCarrito([...carrito, item])
    }

    const quitarItem = (indexParaBorrar) => {
        //Parte 2 - Sacar el item 
        let copy = [...carrito]
        copy = copy.filter((item, index)=>{return index !== indexParaBorrar})
        console.log(copy)
        setCarrito(copy)
    }

    /* Modificar para que ;
    - Al agregar un producto, tambien pueda detarminar la cantidad de unidades a comprar.
    - Modificar la lista de carrito, para que ademas de quitar un producto, pueda aumentar o disminuir la canitdad de unidades del mismo.
    */

    return [
        carrito,
        agregarItem,
        quitarItem,
    ];
}

export default UseCarritoDeCompras;