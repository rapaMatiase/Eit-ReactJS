import { useState } from "react";



function RepasoClaseAnterior(){
    //const [ getValor, setValor] = useState(valor incial);
    const [contador, setContador] = useState(0);

    const estilo = {
        height : 300,
        width : 300,
        backgroundColor : contador < 5 ? "red" : "green",
        fontSize : 200
    }

    const contarClicks = () => {
        setContador(contador + 1)
    }

    return (
        <div style={estilo}  onClick={contarClicks}>
            {contador}
        </div>
    )
}

export default RepasoClaseAnterior;