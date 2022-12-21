import { useRef } from "react";

function InputRef(){

    const referenciaInput = useRef();

    const cuandoHaceClick = () =>{
        //referenciaInput.current == elemento de HTML
        referenciaInput.current.focus()
    }

    
    return (

        <div>
            <input type="text" ref={referenciaInput} />
            <button onClick={cuandoHaceClick}> Clic me</button>
        </div>
    )
}

export default InputRef;