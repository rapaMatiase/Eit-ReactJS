/* 
PARTE 1 - 11.12
Crear un componente cuadrado que cada vez qeu se mueva el mouse dentro de este, se guarde las coordenadas de la posicion del mouse, y no mostrar por pantalla, si no por conosola. 

PARTE 2 - 11.30
Utilizando el evento mouseLeave, y las propiedades del objeto event; clientX, clientY. Al momento que mouse abandone el objeto, mostrar la palabra correspondiente a la direccion de salida (arroba, abajo, izquierda, derecha).
*/
import { useState } from 'react';
import './style.css';
function DireccionDeSalida(){

    const [ coordX, setCoordX] = useState(0);
    const [ coordY, setCoordY] = useState(0);
    const [direccionHorizontal, setDireccionHorizontal] = useState(null);
    const [direccionVertical, setDireccionVertical] = useState(null);

    const mouseSeMueve = (event) => {
        let coordXAnterior = event.clientX
        let coordYAnterior = event.clientY

        setCoordX(coordXAnterior)
        setCoordY(coordYAnterior)
        console.log(coordX, coordY)
    }

    const mouseAbandona = (event) => {
        let coordXUltima = event.clientX
        let coordYUltima = event.clientY

        if(coordX < coordXUltima){
            setDireccionHorizontal("derecha")
        }else if(coordX > coordXUltima){
            setDireccionHorizontal("izquieda")
        }
        
        if(coordY < coordYUltima){
            setDireccionVertical("abajo")
        }else if(coordY > coordYUltima){
            setDireccionVertical("arriba")
        }
    }

    return (
        <div onMouseLeave={mouseAbandona} className='direccionDeSalida' onMouseMove={mouseSeMueve}>
            {direccionHorizontal} - {direccionVertical}
        </div>
    )
}

export default DireccionDeSalida;