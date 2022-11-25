import { useState } from "react";

function Carrusel(props){
    const [numero, setNumero] = useState(0);
    const estilos = {
        contendorDeImagenes : {
            display : "flex",
            flexDirection : "row",
        },
        ventana : {
            maxHeight : "300px",
            maxWidth : "300px",
            overflow : "hidden"
        },
        movimiento : {
            transform : `translate(${numero * -300}px, 0px)`,
            transition : "all .5s linear 0.1s",
        }

    }

    const clickDesplazarIzq = () => {
        if(numero > 0){
            setNumero(numero - 1)
        }
        console.log(numero)
    }

    const clickDesplazarDerecha = () => {
        if(numero < 2){
            setNumero(numero + 1)
        }
        console.log(numero)
    }
    return (
        <div>
            <div style={estilos.ventana}>
                <div style={estilos.movimiento}>
                    <div style={estilos.contendorDeImagenes}>
                        <img src="https://picsum.photos/300/300/?random=1" alt="Imagen 1" />
                        <img src="https://picsum.photos/300/300/?random=2" alt="Imagen 2" />
                        <img src="https://picsum.photos/300/300/?random=3" alt="Imagen 3" />
                    </div>
                </div>
            </div>
                <button onClick={clickDesplazarIzq}> Izq</button>
                <button onClick={clickDesplazarDerecha}> Der </button>
        </div>
    );
}

export default Carrusel;