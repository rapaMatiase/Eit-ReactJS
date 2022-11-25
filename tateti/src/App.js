import './App.css';
import { useState } from 'react';

const SIMBOLO_X = "X"
const SIMBOLO_O = "O"


const Casilla = ({x, y, obtenerTurnoJugador}) =>{
  const [valor, setValor] = useState(null);
  const clickCasilla = () => {
    console.log("ENTRE EN LA FUNCION DE LA CASILLA")

    let simboloTurno = obtenerTurnoJugador(x,y)
    setValor(simboloTurno)
    console.log("SALI EN LA FUNCION DE LA CASILLA")
  }
  return(
    <div onClick={clickCasilla} > {valor} </div>
  );
}

function App() {
  const [tablero, setTablero] = useState([
                                        [null, null, null], 
                                        [null, null, null], 
                                        [null, null, null],
                                      ])
  
  const [turno, setTurno] = useState(SIMBOLO_X);

  const jugar = (x, y) =>{
    console.log("ENTRE EN LA FUNCION DEL TATAETI")
    let copy = tablero
    copy[x][y] = turno
    turno === SIMBOLO_X ? setTurno(SIMBOLO_O) :setTurno(SIMBOLO_X)  
    
    //HOOK DEL PADRE
    setTablero(copy)
    console.table(tablero)
    console.log("SALI EN LA FUNCION DEL TATAETI")

    return copy[x][y]
  }

  return (
    <div className="contenedor">
      <div className='tateti'>
          <Casilla x={0} y={0} obtenerTurnoJugador={jugar} />
          <div onClick={()=>{jugar(0,1)}}>{tablero[0][1]}</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
  );
}

export default App;
