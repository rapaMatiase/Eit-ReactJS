import { useEffect, useState } from "react";

console.log("%c Pre-render", "background-color : yellow")
function EjemploUseEffect(){

    console.log("%c logica del render", "background-color : yellow")

    const [contadorMeGusta, setContadorMeGusta] = useState(0);
    const [contadorNoMeGusta, setContadorNoMeGusta] = useState(0);

    const [color, setColor] = useState("white");

    //ComponenteDidMount (Solo se ejecuta una vez, y es cuando el componente esta siendo montado).
    useEffect(() => {
        console.log("%c UseEffect con dependencias vacias - ComponenetDidMount", "background-color : green")
    }, [/* No tiene Dependencias */])

    //ComponenteDidUpdate (Se ejecuta cada vez que el estado del componenete se actualice)
    useEffect(() => {
        console.log("%c useEffect sin dependencias - ComponenetDidUpdate", "background-color : pink")
    })

    //ComponenteDidUpdate pero con condiciones (dependencia del estado de un hook o mas). En este caso, solo se ejecuta cuando el "contadorMeGusta" sufre un cambio de estado
    useEffect(() => {
        console.log(`%c useEffect con una dependencia de ME GUSTA : ${contadorMeGusta} - ComponenetDidUpdate`, "background-color : blue")

        //ComponentWillUnMount
        return () =>{
            console.log("Ciere useEffect contador de me gusta - compoenntWillUnMount")
        }

    }, [contadorMeGusta])

    //ComponenteDidUpdate pero con condiciones (dependencia del estado de un hook o mas). En este caso, solo se ejecuta cuando el "contadorMeGusta" sufre un cambio de estado
    useEffect(() => {
        console.log(`%c useEffect con una dependencia de NO ME GUSTA : ${contadorNoMeGusta} - ComponenetDidUpdate`, "background-color : red")
        /* QUEDA PENDIENTE */
        window.addEventListener("mouseMove", ()=>{console.log("Estas moviendo!!")})

       /*  return () =>{
            console.log("Ciere useEffect contadorNoMeGusta - compoenntWillUnMount")
        } */

    }, [contadorNoMeGusta])
    
    //ComponenteDidUpdate pero con condiciones (dependencia del estado de un hook o mas). En este caso, solo se ejecuta cuando el "contadorMeGusta" sufre un cambio de estado
    useEffect(() => {
        console.log(`%c Ambors - ComponenetDidUpdate`, "background-color : purple")
        if(contadorMeGusta < contadorNoMeGusta){
            //Decicion pero nos falta ver reference para hacerlo bien.
            setColor("red")
        }else if(contadorMeGusta > contadorNoMeGusta){
            //Decicion pero nos falta ver reference
            setColor("green")
        }

        return () =>{
            console.log("Ciere useEffect ambos contadores - compoenntWillUnMount")
        }
    }, [contadorMeGusta, contadorNoMeGusta])
    

    return (
        <div style={{backgroundColor : color}}>
            {console.log("%c El render", "background-color : yellow")}
            <p onClick={()=>{setContadorMeGusta(contadorMeGusta+1)}} >
                {contadorMeGusta} 👆
            </p>
            <p onClick={()=>{setContadorNoMeGusta(contadorNoMeGusta+1)}}>
                {contadorNoMeGusta} 👇
            </p>
        </div>
    )
}

export default EjemploUseEffect;