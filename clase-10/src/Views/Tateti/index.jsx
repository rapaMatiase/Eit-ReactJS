import './style.css'
import CasillaTateti from '../../Components/CasillaTateti';
import { useState } from 'react';

const SIMBOLO_X = "X"
const SIMBOLO_O = "O"

function Tateti(){

    const [tablero, setTablero] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    const [turno, setTruno] = useState(SIMBOLO_O);

    const casillaHabilitadaParaJugar = (x, y) =>{
        return tablero[x][y] === null
    }

    const cambiarTurno = () =>{
        let siguienteTurno = turno === SIMBOLO_O ? SIMBOLO_X : SIMBOLO_O
        setTruno(siguienteTurno)
    }
    const actualizarTablero = (x, y)=>{
        //Hago una copia del tablero original, porque el estado de un HOOK en si es inalterable.
        let copyTablero = tablero
        //Actualizo la posicion en la copia del tablero
        copyTablero[x][y] = turno 
        //Le seteo al HOOK su nuevo estado, aplastando el estado anterior.
        setTablero(copyTablero)
        //Paso el turno
        cambiarTurno()
        //Devuelvo el valor de la posicion modificada para que la casilla lo peuda mostrar en pantalla.
        return tablero[x][y]
    }

    return (
        <div className='contenedorTateti'>
            <CasillaTateti habilitado={casillaHabilitadaParaJugar} funcionDeActualizacionEnviada={actualizarTablero} x={0} y={0}  />
            <CasillaTateti habilitado={casillaHabilitadaParaJugar} funcionDeActualizacionEnviada={actualizarTablero} x={0} y={1}  />
            <CasillaTateti habilitado={casillaHabilitadaParaJugar} funcionDeActualizacionEnviada={actualizarTablero} x={0} y={2}  />
            <CasillaTateti habilitado={casillaHabilitadaParaJugar} funcionDeActualizacionEnviada={actualizarTablero} x={1} y={0}  />
            <CasillaTateti habilitado={casillaHabilitadaParaJugar} funcionDeActualizacionEnviada={actualizarTablero} x={1} y={1}  />
            <CasillaTateti habilitado={casillaHabilitadaParaJugar} funcionDeActualizacionEnviada={actualizarTablero} x={1} y={2}  />
            <CasillaTateti habilitado={casillaHabilitadaParaJugar} funcionDeActualizacionEnviada={actualizarTablero} x={2} y={0}  />
            <CasillaTateti habilitado={casillaHabilitadaParaJugar} funcionDeActualizacionEnviada={actualizarTablero} x={2} y={1}  />
            <CasillaTateti habilitado={casillaHabilitadaParaJugar} funcionDeActualizacionEnviada={actualizarTablero} x={2} y={2}  />
        </div>
    );
}

export default Tateti;