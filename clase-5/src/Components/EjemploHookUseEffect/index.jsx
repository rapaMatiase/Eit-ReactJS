import { useEffect, useRef, useState } from "react";

function EjemploHookUseEffect(){

    /* Este contador va sumar 1, cada vez que pase por una fase. */
   const [contadorDeMeGusta, setContadorDeMeGusta] = useState(0);
   const [contadorDeNoMeGusta, setContadorDeNoMeGusta] = useState(0);

   const meGustaRef = useRef();
    
    // useEffect( "Funcion de que hacer", "un array de dependencias")

    //ComponentDidMount (Este se ejecuta una sola vez, cuadno el elemento es montado/creado)
    useEffect(()=>{
        console.log(`M - MG:${contadorDeMeGusta}, NMG:${contadorDeNoMeGusta}`)
    }, [])
    
    //ComponenetDidUpdate (Este se ejecuta cada vez que el elemento es actulizado)
    useEffect(()=>{
        console.log(`U - MG:${contadorDeMeGusta}, NMG:${contadorDeNoMeGusta}`)
    },)
    
    //ComponenetDidUpdate con condicion (Este se ejecuta cada vez que el elemento es actulizado y si la condicion se cumple)
    useEffect(()=>{
        console.log(`UA - MG:${contadorDeMeGusta}, NMG:${contadorDeNoMeGusta}`)
    },[contadorDeMeGusta])
 
    useEffect(()=>{
        console.log(`UB - MG:${contadorDeMeGusta}, NMG:${contadorDeNoMeGusta}`)
    },[contadorDeNoMeGusta])

    useEffect(()=>{
        console.log(`UC - MG:${contadorDeMeGusta}, NMG:${contadorDeNoMeGusta}`)
    },[contadorDeMeGusta, contadorDeNoMeGusta])
    
    //ComponenetWillUnMount (Este ejecuta una sola vez, y es cuando el elemento es desmontado/destruido)
    useEffect(()=>{
        console.log(`UD - MG:${contadorDeMeGusta}, NMG:${contadorDeNoMeGusta}`)

        function cambiarAmarillo(event){event.target.style.backgroundColor = "yellow"}
        meGustaRef.current.addEventListener("mouseenter", cambiarAmarillo)

        function cambiarRojo(event){event.target.style.backgroundColor = "red"}
        meGustaRef.current.addEventListener("mouseleave", cambiarRojo)

        //ComponenetWillUnMount
        return () => {
            meGustaRef.current.removeEventListener("mouseenter", cambiarAmarillo);
            meGustaRef.current.removeEventListener("mouseleave", cambiarRojo);
        }
    },[contadorDeMeGusta])
 

    return(
        <div>
            <p ref={meGustaRef} > cantidad de me gusta : {contadorDeMeGusta}</p>            
            <button onClick={()=>{setContadorDeMeGusta(contadorDeMeGusta + 1)}} > Me gusta </button>
            
            <p> cantidad de NO me gusta : {contadorDeNoMeGusta}</p>            
            <button onClick={()=>{setContadorDeNoMeGusta(contadorDeNoMeGusta + 1)}} > No me gusta </button>
            
        </div>
    );
}

export default EjemploHookUseEffect;